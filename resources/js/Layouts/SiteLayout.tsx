import * as React from "react";
import {FC, ReactElement} from "react";
import AppHeader from "../Components/app-header/app-header";
import AppFooter from "../Components/app-footer/app-footer";
import {Head} from "@inertiajs/react";
import CartPopup from "../Components/cart-popup/cart-popup";

export interface ISiteLayout {
    readonly children: ReactElement;
    readonly title: string;
    readonly description: string;
}

const SiteLayout: FC<ISiteLayout> = ({ children, title, description}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <AppHeader />
            {children}
            <AppFooter  />
            <CartPopup />
        </>
    );
}

export default SiteLayout;
