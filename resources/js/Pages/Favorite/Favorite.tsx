import {FC} from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Favorite from "../../Components/favorite/favorite";

const FavoritePage: FC = () => {
    return (
        <SiteLayout title='Избранные товары' description='Список избранных товаров'>
            <Favorite />
        </SiteLayout>
    );
}

export default FavoritePage;
