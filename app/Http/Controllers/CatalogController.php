<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Category $category
     * @return \Inertia\Response
     */
    public function __invoke(Category $category)
    {
        return Inertia::render('Catalog/Catalog', [
            'category' => $category->only('name', 'products', 'alias')
        ]);
    }
}
