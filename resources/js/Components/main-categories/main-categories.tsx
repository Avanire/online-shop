import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import MainCategory from "../main-category/main-category";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MainCategories: FC = () => {
    const categories = useStore(modelMenu.$categories);
    const isLoading = useStore(modelMenu.$categoriesIsLoaded);

    useEffect(() => {
        modelMenu.categoryRequest('categories');
    }, []);

    return (
        <section className={`flex flex-wrap justify-between gap-4 mb-20`}>
            {isLoading ? <div className={`w-full`}><Skeleton count={2} inline={true} width={`48%`} height={`240px`} className={`mr-2`} borderRadius={`24px`} /></div> : categories.map(item => <MainCategory name={item.title} link={item.url} children={item.children}
                                                  key={item.id} image={item.image}/>)}
        </section>
    );
}

export default MainCategories;