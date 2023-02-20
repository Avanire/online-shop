import React, {FC} from "react";
import {ICheckoutPayment} from "../../utils/types";

const CheckoutPayment: FC<ICheckoutPayment> = ({id, name, img, defaultChecked = false, onChange}) => {
    return (
        <section className={`p-6 flex gap-x-4 items-center border border-borderColor rounded-2xl`}>
            <input type="radio"
                   name='pay'
                   id={id}
                   className={`flex-grow-0 border-borderColor w-5 h-5 rounded-full checked:bg-mainPurple checked:hover:bg-mainPurple checked:focus:bg-mainPurple checked:focus:ring-mainPurple`}
                   defaultChecked={defaultChecked}
                   onChange={() => onChange(id)}
            />
            <label htmlFor={id} className={`font-medium text-lg flex-auto cursor-pointer`}>{name}</label>
            <img src={img} alt={name} className={`flex-grow-0`}/>
        </section>
    );
}

export default CheckoutPayment;
