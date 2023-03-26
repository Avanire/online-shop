<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\Banner;
use App\Models\Brand;
use App\Models\MainText;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\CategoryMenuService;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('HomePage/HomePage', [
            //Slider
            'slides'    => Slider::all()->where('activity', 1),
            //MainProducts
            'products'  => Product::with(['category:alias'])->where('activity', 1)->get(),
            //Banners
            'banners'   => Banner::all(),
            //Brands
            'brands'    => Brand::all(),
            //MainText
            'mainText' => MainText::all()->first(),
            //Articles
            'articles' => ArticleCategory::find(1)->article,
            'metaTitle' => setting('site.title'),
            'metaDescription' => setting('site.description')
        ]);
    }
}
