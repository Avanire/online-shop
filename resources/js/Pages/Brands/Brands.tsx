import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Brands from "../../Components/brands/brands";
import {IBrandsPage} from "../../utils/types";

const BrandsPage: FC<IBrandsPage> = ({brands}) => {
    return (
        <SiteLayout title='Бренды' description='Список брендов магазина'>
            <Brands brands={brands}/>
        </SiteLayout>
    );
}

export default BrandsPage;
