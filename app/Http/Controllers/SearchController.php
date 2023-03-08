<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {

        $result = isset($request->search) ? Product::where('name', 'LIKE', '%'.$request->search.'%')->with(['category:alias'])->get() : [];

        return response()->json($result);
    }
}
