import React, {FC} from "react";
import checkoutImage from "../../../images/checkout-done.svg";

const CheckoutSuccessModal: FC = () => {
    return (
        <section className={`p-8 text-center`}>
            <div><img src={checkoutImage} alt="" className={`mb-12 mx-auto`}/></div>
            <h2 className={`font-semibold text-3xl mb-6`}>Заказ оформлен</h2>
            <p className={`mb-12`}>Добавьте получателя, если вы покупаете не для себя, или хотите, чтобы товар забрал
                другой человек</p>
        </section>
    );
}

export default CheckoutSuccessModal;
