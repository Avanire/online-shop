<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Category $category
     * @param Product $product
     * @return \Inertia\Response
     */
    public function __invoke(Category $category, Product $product)
    {
        return Inertia::render('Product/Product', [
            'product'           => $product,
            'metaTitle'         => $product->meta_title,
            'metaDescription'   => $product->meta_description,
            'unionProducts'     => [...$category->products->where('product_name', $product->product_name)]
        ]);
    }
}
