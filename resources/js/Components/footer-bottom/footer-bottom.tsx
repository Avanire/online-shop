import {FC} from "react";
import vkImage from '../../../images/vk.svg';
import {getYear} from "date-fns";
import {Link} from "@inertiajs/react";

const FooterBottom: FC = () => {
    const year = getYear(Date.now());
    return (
        <section className={`border-t-[1px] border-[#E9E9E9] pt-6 flex justify-between items-center`}>
            <div className={`flex items-center gap-x-6 text-gray`}>
                <span>©{year}. CanadaZoo</span>
                <a href="https://vk.com/canada_zoo"><img src={vkImage} alt=""/></a>
            </div>
            <Link href='' className={`text-gray`}>Политика конфиденциальности</Link>
        </section>
    );
}

export default FooterBottom;
