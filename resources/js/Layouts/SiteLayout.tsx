import * as React from "react";
import {FC, ReactElement} from "react";
import AppHeader from "../Components/app-header/app-header";
import AppFooter from "../Components/app-footer/app-footer";
import {Head} from "@inertiajs/react";
import CartPopup from "../Components/cart-popup/cart-popup";
import Breadcrumbs from "../Components/breadcrumbs/breadcrumbs";
import Modal from "../Components/Modal";
import CallbackModal from "../Components/callback-modal/callback-modal";
import {useStore} from "effector-react";
import {modelModal} from "../models/modal";
import CheckoutSuccessModal from "../Components/checkout-success-modal/checkout-success-modal";
import {modelCart} from "../models/cart";

export interface ISiteLayout {
    readonly children: ReactElement;
    readonly title: string;
    readonly description: string;
}

const SiteLayout: FC<ISiteLayout> = ({children, title, description}) => {
    const pathname = location.pathname;

    const openCallback = useStore(modelModal.$modalStore);
    const closeCallback = () => {
        modelModal.toggleModal(false);
    }

    const openCheckout = useStore(modelCart.$checkoutModal);
    const closeCheckout = () => {
        modelCart.toggleCheckoutSuccess(false);
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <AppHeader/>
            {pathname === '/' || pathname === '/checkout' ? null : <Breadcrumbs/>}
            {children}
            <AppFooter/>
            <CartPopup/>
            <Modal show={openCallback} onClose={closeCallback}><CallbackModal/></Modal>
            <Modal show={openCheckout} onClose={closeCheckout}><CheckoutSuccessModal /></Modal>
        </>
    );
}

export default SiteLayout;
