import * as React from "react";
import {FC, ReactElement} from "react";
import AppHeader from "../Components/app-header/app-header";
import AppFooter from "../Components/app-footer/app-footer";

export interface ISiteLayout {
    readonly children: ReactElement;
    readonly address: string;
}

const SiteLayout: FC<ISiteLayout> = ({ children, address }) => {

    return (
        <>
            <AppHeader address={address} />
            {children}
            <AppFooter address={address} />
        </>
    );
}

export default SiteLayout;
