<?php // routes/breadcrumbs.php

// Note: Laravel will automatically resolve `Breadcrumbs::` without
// this import. This is nice for IDE syntax and refactoring.
use App\Models\Category;
use App\Models\Product;
use Diglactic\Breadcrumbs\Breadcrumbs;

// This import is also not required, and you could replace `BreadcrumbTrail $trail`
//  with `$trail`. This is nice for IDE type checking and completion.
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Home
Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push('Главная', route('home'));
});

Breadcrumbs::for('category', function (BreadcrumbTrail $trail, Category $category) {
    if ($category->parent_id !== null) {
        $trail->parent('category', $category::all()->where('id', $category->parent_id)->first());
    } else {
        $trail->parent('home');
    }

    $trail->push($category->name, route('category', $category));
});

Breadcrumbs::for('product', function (BreadcrumbTrail $trail, Category $category, Product $product) {
    $trail->parent('category', $category);
    $trail->push($product->name, route('product', [$category, $product]));
});
