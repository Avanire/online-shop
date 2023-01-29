import {FC} from "react";
import Category from "../../Components/category/category";
import SiteLayout from "../../Layouts/SiteLayout";
import {ICategoryCard} from "../../Utils/types";

const Catalog: FC<ICategoryCard> = ({category}) => {

    return (
        <SiteLayout title='Каталог'>
            <Category category={category}/>
        </SiteLayout>
    );
}

export default Catalog;
