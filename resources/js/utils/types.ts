import React, {ChangeEvent, SyntheticEvent} from "react";

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
    readonly price: number;
    readonly old_price: number | null;
    readonly hit: boolean;
    readonly new_product: boolean;
    readonly recommended: boolean;
    readonly charity: boolean;
    readonly description: string;
    count: number;
    readonly categoryUrl: string;
    readonly category: Array<{ alias: string }>;
    readonly weight: number;
    readonly pet_age: string;
    readonly article: string;
    readonly weight_unit: string;
    readonly images: string;
    isFavorite: boolean;
    readonly brand: IBrand;
}

export interface IArticleComponent {
    readonly article: IArticle;
    readonly additional: Array<IArticle>;
}

export interface IArticlePage {
    readonly article: IArticle;
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly additional: Array<IArticle>;
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

export interface IBrand {
    readonly name: string;
    readonly alias: string;
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
    readonly alias: string;
    readonly created_at: string;
    readonly id: number;
    readonly image: string;
    readonly meta_title: string;
    readonly meta_description: string;
    readonly name: string;
    readonly text: string;
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

export interface IArticles {
    readonly articles: Array<IArticle>;
}

export interface ISendRequest {
    readonly [name: string]: string | Array<IProduct>;
}

export interface IAxios {
    readonly method: string;
    readonly url: string;
    readonly data: {}
}

export interface IInput {
    readonly value: string;
    readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => (void);
    readonly name?: string;
    readonly required?: boolean;
    readonly type: string;
}

export interface ICheckoutDelivery {
    readonly id: string;
    readonly deliveryName: string;
    readonly deliveryDescription: string;
    readonly defaultChecked?: boolean;
    readonly onChange: (id: string) => void;
}

export interface ICheckoutPayment {
    readonly id: string;
    readonly name: string;
    readonly img: string;
    readonly defaultChecked?: boolean;
    readonly onChange: (id: string) => void;
}

export interface IBrandsPage {
    readonly brands: Array<IBrand>;
}

export interface IBrand {
    readonly id: number;
    readonly name: string;
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly image: string;
    readonly description: string;
    readonly alias: string;
    readonly products: Array<IProduct>;
}

export interface IBrandCard {
    readonly name: string;
    readonly products: Array<IProduct>;
}
