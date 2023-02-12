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

export interface ISiteLayout {
    readonly children: ReactElement;
    readonly title: string;
    readonly description: string;
}

const SiteLayout: FC<ISiteLayout> = ({ children, title, description}) => {
    const openCallback = useStore(modelModal.$modalStore);
    const closeCallback = () => {
        modelModal.toggleModal(false);
    }


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <AppHeader />
            {location.pathname === '/' ? null : <Breadcrumbs />}
            {children}
            <AppFooter  />
            <CartPopup />
            <Modal show={openCallback} onClose={closeCallback}><CallbackModal /></Modal>
        </>
    );
}

export default SiteLayout;
