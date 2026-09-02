<?php

use App\Http\Controllers\Auth\AuthController;
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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
	Route::get('/user', function (Request $request) {
		return $request->user();
	});

	Route::post('/logout', [AuthController::class, 'logout']);
});
