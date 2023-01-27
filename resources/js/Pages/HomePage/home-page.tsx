import React, {FC, useEffect, useMemo} from "react";
import MainCategories from "../../components/main-categories/main-categories";
import MainBanner from "../../components/main-banner/main-banner";
import {useStore} from "effector-react";
import {modelProduct} from "../../models/products";
import {IProduct} from "../../utils/types";
import MainProduct from "../../components/main-product/main-product";
import {modelBanner} from "../../models/banner";
import {modelBrands} from "../../models/brand";
import ImageList from "../../components/image-list/image-list";
import Advantages from "../../components/advantages/advantages";
import MainSlider from "../../components/main-slider/main-slider";
import MainText from "../../components/main-text/main-text";
import MainArticles from "../../components/main-articles/main-articles";
import MainSubscription from "../../components/main-subscription/main-subscription";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SiteLayout from "../../Layouts/SiteLayout";
import {Head} from "@inertiajs/react";

export interface IHomePage {
    readonly address: string;
    readonly topMenu: Array<string>
}

const HomePage: FC<IHomePage> = ({address}) => {
    const headingStock = 'Акции';
    const linkStock = '#';
    const headingPopular = 'Популярное';
    const linkPopular = 'Смотреть все';

    const bannerTop = useStore(modelBanner.$mainBannerTop);
    const bannerTopIsLoading = useStore(modelBanner.$mainBannerTopIsLoading);

    const bannerMid = useStore(modelBanner.$mainBannerMiddle);
    const bannerMidIsLoading = useStore(modelBanner.$mainBannerMiddleIsLoading);

    const products = useStore(modelProduct.$products);
    const isLoadingProducts = useStore(modelProduct.$productIsLoading);

    const brands = useStore(modelBrands.$brands);
    const brandsIsLoading = useStore(modelBrands.$brandIsLoading);

    const stocksProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return products.filter(item => item.hit || item.new_product || item.old_price);
    }, [products]);

    const popularProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return products.filter(item => item.hit);
    }, [products]);

    const recommendedProduct = useMemo<Array<IProduct>>(() => {
        return products.filter(item => item.recommended);
    }, [products]);

    useEffect(() => {
        modelProduct.productRequest();
    }, []);

    useEffect(() => {
        modelBanner.mainBannerTopRequest('main-top');
        modelBanner.mainBannerMiddleRequest('main-middle');
    }, []);

    useEffect(() => {
        modelBrands.brandsRequest();
    }, []);

    return (
        <SiteLayout address={address}>
            <>
            <Head>
                <title>213</title>
            </Head>
            <main className={`container mx-auto`}>
                <MainSlider/>
                <MainCategories/>
                {isLoadingProducts ? <div className={`mb-12`}><Skeleton height={`484px`}/></div> :
                    <MainProduct heading={headingStock} linkStock={linkStock} products={stocksProduct}/>}
                {bannerTop && !bannerTopIsLoading ? <MainBanner {...bannerTop} /> :
                    <div className={`mb-12`}><Skeleton height={`182px`}/></div>}
                {isLoadingProducts ? <div className={`mb-12`}><Skeleton height={`484px`}/></div> :
                    <MainProduct heading={headingPopular} linkStock={linkPopular} products={popularProduct}/>}
                {bannerMid && !bannerMidIsLoading ? <MainBanner {...bannerMid} /> :
                    <div className={`mb-12`}><Skeleton height={`182px`}/></div>}
                {brandsIsLoading ? <div className={`mb-12`}><Skeleton height={`290px`}/></div> :
                    <ImageList heading='Популярные бренды' link='Все бренды' list={brands}/>}
                {isLoadingProducts ? <div className={`mb-12`}><Skeleton height={`484px`}/></div> :
                    <MainProduct heading='Рекомендуем вам' products={recommendedProduct}/>}
                <MainText/>
                <Advantages/>
                <MainArticles/>
                <MainSubscription/>
            </main>
            </>
        </SiteLayout>
    );
}

export default HomePage;
