<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class CategoriesProduct extends Model
{
    protected $table = 'category_product';
    protected $fillable = ['product_id', 'category_id'];
    public $timestamps = false;
}
