import {FC} from "react";
import Category from "../../Components/category/category";
import SiteLayout from "../../Layouts/SiteLayout";
import {ICategoryCard} from "../../utils/types";

const Catalog: FC<ICategoryCard> = ({category, subCategories, metaTitle, metaDescription}) => {

    return (
        <SiteLayout title={metaTitle ? metaTitle : category.name} description={metaDescription ? metaDescription : ''}>
            <Category category={category} subCategories={subCategories}/>
        </SiteLayout>
    );
}

export default Catalog;
