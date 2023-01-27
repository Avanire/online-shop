import React, {FC} from "react";
import FooterTop from "../footer-top/footer-top";
import FooterBottom from "../footer-bottom/footer-bottom";

const AppFooter: FC<{address: string}> = ({address}) => {
    return (
        <footer className={`border-t-[1px] border-[#CDCECF]`}>
            <div className={`container pt-12 pb-9 mx-auto`}>
                <FooterTop address={address}/>
                <FooterBottom />
            </div>
        </footer>
    );
}

export default AppFooter;