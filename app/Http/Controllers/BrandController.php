<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Brand $brand
     * @return \Inertia\Response
     */
    public function __invoke(Brand $brand)
    {
        return Inertia::render('Brand/Brand', [
            'metaTitle' => $brand->meta_title,
            'metaDescription' => $brand->meta_description,
            'name' => $brand->name,
            'products' => Product::with(['category:alias'])->where('activity', 1)->where('brand', $brand->id)->get()
        ]);
    }
}
