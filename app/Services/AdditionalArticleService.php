<?php

namespace App\Services;

use App\Models\Article;
use App\Models\ArticleCategory;

class AdditionalArticleService
{
    public static function getAdditionalArticle(Article $article)
    {
        $articles = ArticleCategory::find(1)->article;

        return $articles->filter(function ($value, $key) use ($article) {
            return $value->alias !== $article->alias ? $value : null;
        })->sortBy('created_at')->take(1);
    }
}
