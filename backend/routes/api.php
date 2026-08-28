<?php

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
