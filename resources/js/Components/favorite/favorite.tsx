import React, {FC} from "react";
import {useStore} from "effector-react";
import {modelFavorite} from "../../models/favorites";
import Skeleton from "react-loading-skeleton";
import Product from "../product/product";

const Favorite: FC = () => {
    const products = useStore(modelFavorite.$favoriteProducts);

    return (
        <main className="mx-auto container px-2 sm:px-0">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Избранное</h1>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3 my-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-20">
                    {products.length === 0 ?
                        <div className={`w-full`}>Избранных продуктов нет</div> : products.map((product) => (
                            <Product key={product.id} {...product} categoryUrl={product.category[0].alias}/>
                        ))}
                </div>
            </div>
        </main>
    );
}

export default Favorite;
