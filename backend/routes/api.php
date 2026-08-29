<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
	return response()->json([
		'status' => 'ok',
		'service' => 'laravel',
	]);
});

Route::get('/hello-world', function () {
	return response()->json([
		'status' => 'ok',
		'service' => 'hello world is here',
	]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});
