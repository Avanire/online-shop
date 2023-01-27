import * as React from "react";
import {FC, ReactElement} from "react";
import AppHeader from "../Components/app-header/app-header";
import AppFooter from "../Components/app-footer/app-footer";
import {Head} from "@inertiajs/react";

export interface ISiteLayout {
    readonly children: ReactElement;
    readonly title: string;
}

const SiteLayout: FC<ISiteLayout> = ({ children, title}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AppHeader />
            {children}
            <AppFooter  />
        </>
    );
}

export default SiteLayout;
