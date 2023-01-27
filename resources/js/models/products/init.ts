import {productByCategoryRequest, productRequest, singleProductRequest} from "./event";
import {
    $productByCategory,
    $productByCategoryIsLoading,
    $productIsLoading,
    $products,
    $singleProduct,
    $singleProductIsLoading
} from "./store";
import {fetchProductByCategoryFx, fetchProductFx, fetchSingleProductFx} from "./fx";
import {forward} from "effector/compat";

$products
    .on(fetchProductFx.doneData, (_, result) => result.data);

$productIsLoading
    .on(fetchProductFx.pending, (_, isLoading) => isLoading);

$productByCategory.on(fetchProductByCategoryFx.doneData, (_, result) => result.data);
$productByCategoryIsLoading.on(fetchProductByCategoryFx.pending, (isLoading) => isLoading);

$singleProduct.on(fetchSingleProductFx.doneData, (_, result) => result.data);
$singleProductIsLoading.on(fetchSingleProductFx.pending, (isLoading) => isLoading);

forward({
    from: productRequest,
    to: fetchProductFx
});

forward({
    from: productByCategoryRequest,
    to: fetchProductByCategoryFx
});

forward({
    from: singleProductRequest,
    to: fetchSingleProductFx
});