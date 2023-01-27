import {productRequest, productByCategoryRequest, singleProductRequest} from "./event";
import {
    $products,
    $productIsLoading,
    $productByCategory,
    $productByCategoryIsLoading,
    $singleProduct,
    $singleProductIsLoading
} from "./store";

export const modelProduct = {
    productRequest,
    $products,
    $productIsLoading,
    productByCategoryRequest,
    $productByCategory,
    $productByCategoryIsLoading,
    singleProductRequest,
    $singleProduct,
    $singleProductIsLoading
}