<?php

use App\Models\Article;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Diglactic\Breadcrumbs\Breadcrumbs;

use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push('Главная', route('home'));
});

Breadcrumbs::for('favorite', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Избранное', route('favorite'));
});

Breadcrumbs::for('cart', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Корзина', route('cart'));
});

Breadcrumbs::for('category', function (BreadcrumbTrail $trail, Category $category) {
    if ($category->parent_id !== null) {
        $trail->parent('category', $category::all()->where('id', $category->parent_id)->first());
    } else {
        $trail->parent('home');
    }

    $trail->push($category->name, route('category', $category));
});

Breadcrumbs::for('brands', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Бренды', route('brands'));
});

Breadcrumbs::for('brand', function (BreadcrumbTrail $trail, Brand $brand) {
    $trail->parent('home');
    $trail->push($brand->name, route('brand', [$brand]));
});

Breadcrumbs::for('product', function (BreadcrumbTrail $trail, Category $category, Product $product) {
    $trail->parent('category', $category);
    $trail->push($product->name, route('product', [$category, $product]));
});

Breadcrumbs::for('articles', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Статьи', route('articles'));
});

Breadcrumbs::for('article', function (BreadcrumbTrail $trail, Article $article) {
    $trail->parent('articles');
    $trail->push($article->name, route('article', $article));
});
