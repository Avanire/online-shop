import React, {FC} from "react";
import Logo from "../logo/logo";
import Search from "../search/search";
import HeaderCart from "../header-cart/header-cart";

const HeaderMiddle: FC = () => {
    return (
        <section className={`flex items-center flex-wrap mb-5 xs:gap-y-6 justify-center order-2 lg:order-none lg:justify-between mt-4 lg:mt-0`}>
            <Logo/>
            <Search/>
            <HeaderCart/>
        </section>
    );
}

export default HeaderMiddle;
