import React, {FC, ReactNode} from "react";

interface IFooterMenu {
    name: string;
    extraClass?: string;
    children: ReactNode;
}

const FooterMenu: FC<IFooterMenu> = ({name, extraClass, children}) => {
    return (
        <div className={extraClass}>
            <div className={`text-[#99A3AA] mb-5`}>{name}</div>
            {children}
        </div>
    );
}

export default FooterMenu;