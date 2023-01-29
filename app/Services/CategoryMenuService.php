<?php

namespace App\Services;

use App\Models\Category;

class CategoryMenuService
{
    public static function getCategoriesMenu()
    {
        $menu = menu('categories ', '_json');

        $categories = Category::all();

        foreach ($menu as $value) {
            if ($value->parent_id === null) {
                $value->image = $categories->where('alias', $value->url)->first()->image;
            }
        }

        return $menu;
    }
}
