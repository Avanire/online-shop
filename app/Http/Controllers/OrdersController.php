<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $order = Order::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'address' => $request->address,
            'delivery' => $request->delivery,
            'payment' => $request->payment,
            'products' => json_encode($request->products),
            'status'    => 1
        ]);

        if ($order) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }

    }
}
