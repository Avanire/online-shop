import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Checkout from "../../Components/checkout/checkout";

const CheckoutPage: FC = () => {
    return (
        <SiteLayout title='Оформление заказа' description='Оформление заказа на сайте CanadaZoo'>
            <Checkout/>
        </SiteLayout>
    );
}

export default CheckoutPage;
