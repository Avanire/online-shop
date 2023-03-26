<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BrandsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Brands/Brands', [
            'brands' => Brand::where('activity', 1)->get()
        ]);
    }
}
