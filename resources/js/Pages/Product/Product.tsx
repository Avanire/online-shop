import {FC} from "react";
import ProductCard from "../../Components/product-card/product-card";
import SiteLayout from "../../Layouts/SiteLayout";
import {IProductCard} from "../../utils/types";

const Product: FC<IProductCard> = ({product, metaTitle, metaDescription}) => {

    return (
        <SiteLayout title={metaTitle ? metaTitle : product.name} description={metaDescription ? metaDescription : ''}>
            <ProductCard product={product} />
        </SiteLayout>
    );
}

export default Product;
