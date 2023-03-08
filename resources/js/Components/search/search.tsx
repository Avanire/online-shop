import React, {FC, useCallback, useState} from "react";
import searchImage from '../../../images/Search.svg';
import styles from './search.module.css';
import {useStore} from "effector-react";
import {STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";
import {modelSearch} from "../../models/search";
import Skeleton from "react-loading-skeleton";
//@ts-ignore
import {debounce} from 'lodash';

const Search: FC = () => {
    const [search, setSearch] = useState<string>('');
    const products = useStore(modelSearch.$searchProducts);
    const productsIsLoading = useStore(modelSearch.$searchRequestLoading);

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        modelSearch.requestSearchQuery({search: e.target.value});
    }, [search]);

    const handleClickSearchItem = useCallback(() => {
        modelSearch.setDefaultSearchStore();
    }, []);

    return (
        <>
            <form action='' method='POST' className={`${styles.searchForm} basis-96 h-12 grow lg:mr-14 relative`}>
                <input type="text"
                       placeholder='Искать товары'
                       value={search}
                       className={`${styles.searchInput} focus-visible:outline-none outline outline-2 outline-offset-2 outline-[var(--main-purple)]`}
                       onChange={handleSearch}
                />
                <button className={styles.searchBtn}><img src={searchImage} alt=""/></button>
                {
                    search.length > 0 ? (
                        <div className={`bg-bgColor w-full p-6 absolute z-50 top-14 rounded-xl space-y-3`}>
                            {
                                productsIsLoading ? (
                                    <>
                                        {[...new Array(3)].map(() => (
                                            <div className={`grid grid-cols-12 gap-x-3`}>
                                                <span className={`col-span-1`}><Skeleton height={64} /></span>
                                                <span className={`col-span-11`}><Skeleton height={64} /></span>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    products.length > 0 ? products.map(item => (
                                        <div key={item.id} className={`flex items-center gap-x-3`}>
                                            <img src={`${STORAGE_URL}${item.image}`} alt="" className={`w-16`}/>
                                            <Link href={`/catalog/${item.category[0].alias}/${item.alias}`}
                                                  onClick={handleClickSearchItem}>{item.name}</Link>
                                        </div>
                                    )) : (<div>Товаров с таким названием нет</div>)
                                )
                            }
                        </div>
                    ) : null
                }
            </form>
        </>
    );
}

export default Search;
