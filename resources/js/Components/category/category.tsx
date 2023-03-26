import React, {ChangeEvent, FC, Fragment, useCallback, useEffect, useMemo, useState} from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Dialog, Menu, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon, FunnelIcon} from '@heroicons/react/20/solid';
import {classNames} from "../../utils/utils";
import {ICategoryComponent, IProduct, ISortOptions} from "../../utils/types";
import Product from "../product/product";
import CategoryFilter from "../category-filter/category-filter";
import MobileCategoryFilter from "../mobile-category-filter/mobile-category-filter";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {modelFavorite} from "../../models/favorites";

let params = new URLSearchParams((new URL(window.location.href)).searchParams);

//TODO сделать более простую для масштабирования фильтрацию
const Category: FC<ICategoryComponent> = ({category, subCategories}) => {
    let sortOptions = [
        {name: 'Цена: Сначала дешевая', current: true, type: 'asc'},
        {name: 'Цена: Сначала дорогая', current: false, type: 'desc'},
    ]

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const [priceSort, setPriceSort] = useState('asc');

    const [filterWeight, setFilterWeight] = useState<Array<number>>([]);
    const [filterAge, setFilterAge] = useState<Array<string>>([]);

    const sortPriceProduct = (a: IProduct, b: IProduct) => {
        if (priceSort === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    }

    //Объединяем 3 массива продуктов корзины и всех продуктов категории, чтобы показывать количество
    const productsCart = useStore(modelCart.$cart);
    const productsFavorite = useStore(modelFavorite.$favoriteProducts);

    const productsCartFilteredByCategory = useMemo(() => {
        return productsCart.filter(product => product.category.some((item) => item.alias === category.alias));
    }, [productsCart]);
    const productsFavoriteFilteredByCategory = useMemo(() => {
        return productsFavorite.filter(product => product.category.some((item) => item.alias === category.alias));
    }, [productsFavorite]);

    const products = Array.from(new Map([...category.products, ...productsCartFilteredByCategory, ...productsFavoriteFilteredByCategory].map(item => [item['alias'], item])).values());

    const filtered = useMemo((): Array<IProduct> => {
        const filterArray = new Set<IProduct>();
        products.forEach(product => {
            //Первое свойство в фильтре
            if (filterWeight.length > 0) {
                for (let i = 0; i < filterWeight.length; i++) {
                    if (filterWeight[i] === product.weight) {
                        filterArray.add(product);
                    }
                }
            }
            //Второе свойство в фильтре
            if (filterAge.length > 0) {
                for (let i = 0; i < filterAge.length; i++) {
                    if (filterAge[i] === product.pet_age) {
                        filterArray.add(product);
                    }
                }
            }
        });
        return Array.from(filterArray);
    }, [filterAge, filterWeight, products]);

    const weight = useMemo(() => {
        const allWeight = products.sort((a, b) => a.price - b.price).map(item => item.weight).filter(n => n);
        return Array.from(new Set(allWeight)).map(item => {
            return {
                value: item,
                label: item,
                checked: filterWeight.includes(item)
            }
        });
    }, [products, filterWeight]);

    const age = useMemo(() => {
        const allAge = category.products.map(item => item.pet_age).filter(n => n);
        return Array.from(new Set(allAge)).map(item => {
            return {
                value: item,
                label: item,
                checked: false
            }
        });
    }, [products]);

    const handleFilterWeight = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setFilterWeight(prevState => {
                return [...prevState, +e.target.value]
            })
        } else {
            const pos = filterWeight.indexOf(Number(e.target.value));

            setFilterWeight((prevState) => {
                prevState.splice(pos, 1);
                return [...prevState];
            });
        }
    }, [filterWeight]);

    const handleChangeSort = (option: ISortOptions) => {
        setPriceSort(option.type);
        sortOptions = [...sortOptions].map(item => item.type === option.type ? {...item, current: true} : {
            ...item,
            current: false
        });
    }

    useEffect(() => {
        if (!!filterWeight.length) {
            params.set('weight', filterWeight.join('_'));
            window.history.pushState(null, '', `?${params}`);
        } else {
            window.history.replaceState(null, '', window.location.pathname);
        }
    }, [filterWeight]);

    useEffect(() => {
        if (params.has('weight')) {
            const paramsWeight = params.get('weight')?.split('_').map(Number);
            setFilterWeight(paramsWeight || []);
        }

        return () => {
            params = new URLSearchParams();
        }
    }, []);

    const filters = [
        {
            id: 'weight',
            name: 'Вес',
            options: weight,
            handleFunction: handleFilterWeight
        }
    ];

    return (
        <>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel
                                className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Фильтр</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Закрыть</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>

                                {/* Filters */}
                                <MobileCategoryFilter filters={filters} subCategories={subCategories}/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto container px-2 sm:px-0">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{category.name}</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Сортировка
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({active}) => (
                                                    <span
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm cursor-pointer'
                                                        )}
                                                        onClick={() => handleChangeSort(option)}
                                                    >
                                                            {option.name}
                                                        </span>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/*<button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true"/>
                            </button>*/}
                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/*Filters*/}
                        <CategoryFilter filters={filters} subCategories={subCategories}/>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-20">
                                {products.length === 0 ?
                                    <div className={`w-full`}><Skeleton count={8} inline={true} width={280}
                                                                        height={444} className={`mr-5`}/>
                                    </div> : filtered.length > 0 ? filtered.sort(sortPriceProduct).map((product) => product && (
                                        <Product key={product.id} {...product} categoryUrl={product.category[0].alias}/>
                                    )) : products.sort(sortPriceProduct).map((product) => (
                                        <Product key={product.id} {...product} categoryUrl={product.category[0].alias}/>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Category;
