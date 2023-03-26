import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import {IBrand} from "../../utils/types";
import Brand from "../../Components/brand/brand";

const BrandPage:FC<IBrand> = ({products, name, metaTitle, metaDescription}) => {
    return (
        <SiteLayout title={metaTitle} description={metaDescription}>
            <Brand products={products} name={name} />
        </SiteLayout>
    );
}

export default BrandPage;
