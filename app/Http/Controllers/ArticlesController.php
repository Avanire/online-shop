<?php

namespace App\Http\Controllers;

use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    /**
     * Handle the incoming request.
     *
     *
     * @param ArticleCategory $category
     * @return \Inertia\Response
     */
        public function __invoke(ArticleCategory $category)
        {
            return Inertia::render('Articles/Articles', [
                'articles' => $category::all()->where('id', 1)->first()->article
            ]);
        }
}
