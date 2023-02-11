import {FC, Fragment, SyntheticEvent, useMemo} from "react";
import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {RUB, STORAGE_URL} from "../../utils/constans";
import {IProduct} from "../../utils/types";
import {Link} from "@inertiajs/react";

const CartPopup: FC = () => {
    const cart = useStore(modelCart.$cart);
    const open = useStore(modelCart.$cartState);

    const total = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.count), 0);
    }, [cart])

    const handleRemove = (e: SyntheticEvent, product: IProduct) => {
        e.preventDefault();

        modelCart.removeFromCart(product);
    }

    const sortCartProduct = (a: IProduct, b: IProduct) => {
        return ('' + a.name).localeCompare(b.name);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => modelCart.toggleCart(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title
                                                    className="text-lg font-medium text-gray-900">Корзина</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => modelCart.toggleCart(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cart.sort(sortCartProduct).map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div
                                                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={`${STORAGE_URL}${product.image}`}
                                                                        alt={product.name}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div
                                                                            className="flex justify-between text-base font-medium text-gray-900">
                                                                            <div className={`text-headerColor text-md`}>
                                                                                <a href={product.alias}>{product.name}</a>
                                                                            </div>
                                                                            <p className="ml-4">{product.price}{RUB}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">Кол-во {product.count}</p>

                                                                        <div className="flex">
                                                                            <button
                                                                                type="button"
                                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                onClick={(e) => handleRemove(e, product)}
                                                                            >
                                                                                Удалить
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Всего</p>
                                                <p>{total} {RUB}</p>
                                            </div>
                                            <div className="mt-6">
                                                <Link
                                                    href="cart"
                                                    onClick={() => modelCart.toggleCart(false)}
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Оформить заказ
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => modelCart.toggleCart(false)}
                                                    >
                                                        <span>Продолжить покупки</span>
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>);
}

export default CartPopup;
