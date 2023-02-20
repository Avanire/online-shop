import React, {FC} from "react";
import {ICheckoutDelivery} from "../../utils/types";

const CheckoutDelivery: FC<ICheckoutDelivery> = ({id, deliveryName, deliveryDescription, defaultChecked = false, onChange}) => {
    return (
        <section className={`p-6 flex-auto border border-borderColor rounded-2xl relative`}>
            <label htmlFor={id} className={`pr-24 block cursor-pointer`}>
                <div className={`font-medium text-lg mb-2`}>{deliveryName}</div>
                <div className={`text-linkColor`}>{deliveryDescription}</div>
            </label>
            <input type='radio'
                   id={id} name='checkout-delivery'
                   className={`border-borderColor w-5 h-5 block rounded-full absolute top-6 right-6 checked:bg-mainPurple checked:hover:bg-mainPurple checked:focus:bg-mainPurple checked:focus:ring-mainPurple`}
                   defaultChecked={defaultChecked}
                   onChange={() => onChange(id)}
            />
        </section>
    );
}

export default CheckoutDelivery;
