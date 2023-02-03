<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleCategory;
use Inertia\Inertia;
use App\Services\AdditionalArticleService;

class ArticleController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Article $article
     * @return \Inertia\Response
     */
    public function __invoke(Article $article)
    {
        return Inertia::render('Article/Article', [
            'article'           => $article,
            'metaTitle'         => $article->meta_title,
            'metaDescription'   => $article->meta_description,
            'additional'        => [...AdditionalArticleService::getAdditionalArticle($article)]
        ]);
    }
}
