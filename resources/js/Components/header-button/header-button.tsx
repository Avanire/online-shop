import React, {FC} from "react";
import {Link} from "@inertiajs/react";

interface IHeaderButton {
    readonly image: string;
    readonly link: string;
    readonly text?: string;
    readonly handleFunction?: () => void;
}

const HeaderButton: FC<IHeaderButton> = ({image, link, text}) => {
    return (
        <Link href={link} className={`flex flex-col justify-center max-h-12`}>
            <img src={image} alt="" className={`max-h-7`}/>
            <div className={`text-[var(--link-more)] text-center text-sm`}>{text}</div>
        </Link>
    );
}

export default HeaderButton;
