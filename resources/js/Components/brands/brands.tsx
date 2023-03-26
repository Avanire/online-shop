import React, {FC} from "react";
import {IBrandsPage} from "../../utils/types";
import {Link} from "@inertiajs/react";
import {STORAGE_URL} from "../../utils/constans";

const Brands: FC<IBrandsPage> = ({brands}) => {
    return (
        <section className={`container p-3 sm:p-0 mx-auto mb-16`}>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Бренды</h1>
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`}>
                {brands.map(item => (
                    <Link href={`/brands/${item.alias}`} key={item.id}>
                        <img src={`${STORAGE_URL}${item.image}`} alt={item.name}/>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Brands;
