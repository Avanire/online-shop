<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CallbackController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('home');
Route::post('/', CallbackController::class);

Route::group(['prefix' => 'catalog'], function () {
    Route::get('{category}', CatalogController::class)->name('category');
    Route::get('{category}/{product}', ProductController::class)->name('product');
});

Route::group(['prefix' => 'brands'], function() {
    Route::get('/', BrandsController::class)->name('brands');
    Route::get('/{brand}', BrandController::class)->name('brand');
});

Route::get('favorite', FavoriteController::class)->name('favorite');

Route::post('search', SearchController::class)->name('search');

Route::get('articles', ArticlesController::class)->name('articles');
Route::get('articles/{article}', ArticleController::class)->name('article');

Route::get('cart', CartController::class)->name('cart');

Route::get('checkout', CheckoutController::class)->name('checkout');
Route::post('checkout', OrdersController::class);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
