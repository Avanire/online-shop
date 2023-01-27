<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at'];

    public function category() {
        return $this->belongsToMany(Category::class);
    }

    public function brand() {
        return $this->belongsTo(Brand::class);
    }

    public function getRouteKeyName()
    {
        return 'alias';
    }
}
