import {FC} from "react";
import HeaderTop from "../header-top/header-top";
import HeaderMiddle from "../header-middle/header-middle";
import MainMenu from "../main-menu/main-menu";

const AppHeader: FC = () => {
    return (
        <header>
            <div className={`container mx-auto xs:px-3 grid xs:mb-10`}>
                <HeaderTop />
                <HeaderMiddle/>
                <MainMenu/>
            </div>
        </header>
    );
}

export default AppHeader;
