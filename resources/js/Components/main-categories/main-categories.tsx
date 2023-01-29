import React, {FC} from "react";
import MainCategory from "../main-category/main-category";
import 'react-loading-skeleton/dist/skeleton.css';
import {usePage} from "@inertiajs/react";

const MainCategories: FC = () => {
    const categories = usePage().props.categories;

    return (
        <section className={`flex flex-wrap justify-between gap-4 mb-20`}>
            {categories.map(item => <MainCategory name={item.title} link={item.url} children={item.children}
                                                  key={item.id} image={item.image}/>)}
        </section>
    );
}

export default MainCategories;
