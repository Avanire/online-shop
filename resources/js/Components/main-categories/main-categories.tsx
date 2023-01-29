import React, {FC} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import MainCategory from "../main-category/main-category";
import 'react-loading-skeleton/dist/skeleton.css';

const MainCategories: FC = () => {
    const categories = useStore(modelMenu.$categories);

    return (
        <section className={`flex flex-wrap justify-between gap-4 mb-20`}>
            {categories.map(item => <MainCategory name={item.title} link={item.url} children={item.children}
                                                  key={item.id} image={item.image}/>)}
        </section>
    );
}

export default MainCategories;
