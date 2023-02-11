import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Cart from "../../Components/cart/cart";

const CartPage: FC = () => {
    return (
        <SiteLayout title='Корзина' description='Корзина сайта CanadaZoo'>
            <Cart />
        </SiteLayout>
    );
}

export default CartPage;
