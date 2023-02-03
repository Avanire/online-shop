import React, {FC, ReactNode} from "react";

interface IFooterMenu {
    name: string;
    extraClass?: string;
    children: ReactNode;
}

const FooterMenu: FC<IFooterMenu> = ({name, extraClass, children}) => {
    return (
        <div className={extraClass}>
            <div className={`mb-5`}>{name}</div>
            {children}
        </div>
    );
}

export default FooterMenu;
