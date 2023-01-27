import React, {FC, useState} from "react";
// @ts-ignore
import searchImage from '../../../images/Search.svg';
// @ts-ignore
import styles from './search.module.css';

const Search: FC = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <form action="" method='POST' className={`${styles.searchForm} basis-96 h-12 grow mr-14`}>
            <input type="text"
                   placeholder='Искать товары'
                   value={search}
                   className={`${styles.searchInput} focus-visible:outline-none outline outline-2 outline-offset-2 outline-[var(--main-purple)]`}
                   onChange={handleSearch}
            />
            <button className={styles.searchBtn}><img src={searchImage} alt=""/></button>
        </form>
    );
}

export default Search;
