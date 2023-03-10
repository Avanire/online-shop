import {FC, useEffect, useMemo} from "react";
import MainCategories from "../../Components/main-categories/main-categories";
import MainBanner from "../../Components/main-banner/main-banner";
import {IHomePage, IProduct} from "../../utils/types";
import MainProduct from "../../Components/main-product/main-product";
import ImageList from "../../Components/image-list/image-list";
import Advantages from "../../Components/advantages/advantages";
import MainSlider from "../../Components/main-slider/main-slider";
import MainText from "../../Components/main-text/main-text";
import MainArticles from "../../Components/main-articles/main-articles";
import MainSubscription from "../../Components/main-subscription/main-subscription";
import SiteLayout from "../../Layouts/SiteLayout";
import {modelSliders} from "../../models/sliders";
import {modelArticles} from "../../models/articles";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {modelFavorite} from "../../models/favorites";

const HomePage: FC<IHomePage> = ({slides, products, banners, brands, mainText, articles, metaTitle, metaDescription}) => {
    const headingStock = 'Акции';
    const linkStock = '#';
    const headingPopular = 'Популярное';
    const linkPopular = 'Смотреть все';

    const cartProducts = useStore(modelCart.$cart);
    const favoriteProducts = useStore(modelFavorite.$favoriteProducts);
    const unionProducts = Array.from(new Map([...products, ...cartProducts, ...favoriteProducts].map(item => [item['alias'], item])).values());

    const bannerTop = useMemo(() => {
        return banners.find(item => item.position === 'main-top');
    }, [banners]);

    const bannerMid = useMemo(() => {
        return banners.find(item => item.position === 'main-middle');
    }, [banners]);

    const stocksProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return unionProducts.filter(item => item.hit || item.new_product || item.old_price);
    }, [cartProducts, favoriteProducts, unionProducts]);

    const popularProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return unionProducts.filter(item => item.hit);
    }, [cartProducts, favoriteProducts, unionProducts]);

    const recommendedProduct = useMemo<Array<IProduct>>(() => {
        return unionProducts.filter(item => item.recommended);
    }, [cartProducts, favoriteProducts, unionProducts]);

    useEffect(() => {
        modelSliders.slidersRequest(slides);
    }, [slides]);

    useEffect(() => {
        modelArticles.articleRequest(articles);
    }, [articles]);

    return (
        <SiteLayout title={metaTitle} description={metaDescription}>
            <main className={`container mx-auto xs:px-3`}>
                <MainSlider/>
                <MainCategories/>
                <MainProduct heading={headingStock} linkStock={linkStock} products={stocksProduct}/>
                {bannerTop && <MainBanner {...bannerTop} />}
                <MainProduct heading={headingPopular} linkStock={linkPopular} products={popularProduct}/>
                {bannerMid && <MainBanner {...bannerMid} />}
                <ImageList heading='Популярные бренды' link='Все бренды' list={brands}/>
                <MainProduct heading='Рекомендуем вам' products={recommendedProduct}/>
                <MainText {...mainText}/>
                <Advantages/>
                <MainArticles/>
                <MainSubscription/>
            </main>
        </SiteLayout>
    );
}

export default HomePage;
