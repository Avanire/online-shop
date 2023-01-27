import {FC} from "react";
import HeaderTopNav from "../header-top-nav/header-top-nav";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HeaderPhoneBlock from "../header-phone-block/header-phone-block";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";

const HeaderTop: FC = () => {
    const address = useStore(modelSetting.$address);

    return (
        <section className={`flex gap-8 my-5 flex-wrap items-center`}>
            <div className={`font-normal text-base min-w-[183px]`}>{address ? address : <Skeleton/>}</div>
            <HeaderTopNav/>
            <HeaderPhoneBlock/>
        </section>
    );
}

export default HeaderTop;
