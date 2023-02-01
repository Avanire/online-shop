import {ChangeEvent, SyntheticEvent} from "react";

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
    readonly categoryUrl: string;
    readonly weight: number;
    readonly pet_age: string;
    readonly article: string;
    readonly weight_unit: string;
}

export interface IProductComponent {
    readonly product: IProduct;
    readonly unionProducts: Array<IProduct>;
}

export interface IProductCard {
    readonly product: IProduct;
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly unionProducts: Array<IProduct>;
}

export interface ICategory {
    readonly name: string;
    readonly products: Array<IProduct>;
    readonly alias: string;
}

export interface ICategoryComponent {
    readonly category: ICategory;
    readonly subCategories: Array<ICategory>;
}

export interface ICategoryCard {
    readonly category: ICategory;
    readonly subCategories: Array<ICategory>;
    readonly metaTitle: string;
    readonly metaDescription: string;
}

export interface IBanner {
    title: string;
    description?: string;
    link?: string;
    image: string;
    position: string;
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
export interface IMenuItem {
    readonly id: number;
    readonly url: string;
    readonly title: string;
}

export interface IHomePage {
    readonly slides: Array<ISlide>;
    readonly products: Array<IProduct>;
    readonly banners: Array<IBanner>;
    readonly brands: Array<IImage>;
    readonly mainText: IMainText;
    readonly articles: Array<IArticle>;
    readonly metaDescription: string;
    readonly metaTitle: string;
}

export interface IMainCategory {
    name: string;
    link: string;
    children: Array<IMenu>;
    image?: string;
}

export interface IMainProduct {
    heading: string;
    linkStock?: string;
    products: Array<IProduct>;
    productToShow?: number;
}

export interface IMainText {
    heading: string;
    content: string;
    image: string;
}

export interface ICategoryFilter {
    readonly filters: Array<IFilters>;
    readonly subCategories: Array<ICategory>;
}

export interface IFilters {
    readonly id: string;
    readonly name: string;
    readonly options: Array<IFilter>,
    readonly handleFunction: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IFilter {
    readonly value: string | number;
    readonly label: string | number;
    readonly checked: boolean;
}

export interface ISortOptions {
    readonly name: string;
    readonly current: boolean;
    readonly type: string;
}

export interface IBreadcrumbItem {
    readonly title: string;
    readonly url: string;
    readonly current?: boolean;
}
