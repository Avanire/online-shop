import {FC} from "react";
import Category from "../../Components/category/category";
import SiteLayout from "../../Layouts/SiteLayout";
import {ICategoryCard} from "../../utils/types";

const Catalog: FC<ICategoryCard> = ({category, subCategories}) => {

    return (
        <SiteLayout title='Каталог'>
            <Category category={category} subCategories={subCategories}/>
        </SiteLayout>
    );
}

export default Catalog;
