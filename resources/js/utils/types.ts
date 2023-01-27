import {SyntheticEvent} from "react";

export interface IMenu {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly icon_class: string;
    readonly children: Array<IMenu>;
    readonly image?: string;
}

export interface IProduct {
    readonly id: number;
    readonly alias: string;
    readonly image: string;
    readonly rating: number | null;
    readonly count_rating: number | null;
    readonly name: string;
    readonly brand: number;
    readonly price: number;
    readonly old_price: number | null;
    readonly hit: boolean;
    readonly new_product: boolean;
    readonly recommended: boolean;
    readonly charity: boolean;
    readonly description: string;
    count: number;
}

export interface ICategory {
    readonly name: string;
    readonly products: Array<IProduct>;
}

export interface IBanner {
    title: string;
    description?: string;
    link?: string;
    image: string;
}

export interface IImageList {
    heading: string;
    link: string;
    list: Array<IImage>;
}

export interface IImage {
    id: number;
    image: string;
    name: string;
    alias: string;
}

export interface ISlide {
    id: number;
    name: string;
    image: string;
    link: string;
    handleClickNext: (e: SyntheticEvent) => void;
    handleClickPrev: (e: SyntheticEvent) => void;
}

export interface IArticle {
    readonly id: number;
    readonly name: string;
    readonly alias: string;
    readonly created_at: string;
    readonly image: string;
}