import {FC} from "react";
import FooterTop from "../footer-top/footer-top";
import FooterBottom from "../footer-bottom/footer-bottom";

const AppFooter: FC = () => {
    return (
        <footer className={`border-t-[1px] border-[#CDCECF]`}>
            <div className={`container pt-12 pb-9 mx-auto`}>
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    );
}

export default AppFooter;
