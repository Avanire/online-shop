<?php

namespace App\Http\Controllers;

use App\Http\Requests\CallbackRequest;
use App\Mail\CallbackSender;
use App\Models\Request;
use Illuminate\Support\Facades\Mail;

class CallbackController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(CallbackRequest $request)
    {
        $request = Request::create([
            'name' => $request->name,
            'phone' => $request->phone
        ]);

        Mail::to(env('ADMIN_EMAIL'))->send(new CallbackSender($request));

        return response()->json($request);
    }
}
