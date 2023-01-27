import React, {FC} from "react";

interface IAdvantage {
    image?: string;
    name: string;
    description: string;
}

const Advantage:FC<IAdvantage> = ({image, name, description}) => {
    return (
        <section className={`text-center`}>
            {image ? <img src={image} alt={name} className={`w-12 h-12 mb-6 m-auto`} /> : <div className={`mb-6 w-12 h-12 rounded-full bg-[#F6F7F9] inline-block`}/>}
            <div className={`font-bold text-xl mb-2`}>{name}</div>
            <div>{description}</div>
        </section>
    );
}

export default Advantage;