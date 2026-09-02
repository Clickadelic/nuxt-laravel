<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
	/**
	 * Register a new user and log them in via the session guard.
	 */
	public function register(Request $request): JsonResponse
	{
		$validated = $request->validate([
			'name' => ['required', 'string', 'max:255'],
			'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
			'password' => ['required', 'confirmed', Password::defaults()],
		]);

		$user = User::create([
			'name' => $validated['name'],
			'email' => $validated['email'],
			'password' => Hash::make($validated['password']),
		]);

		event(new Registered($user));

		Auth::guard('web')->login($user);

		$request->session()->regenerate();

		return response()->json([
			'user' => $user,
		], 201);
	}

	/**
	 * Authenticate a user via the session guard.
	 */
	public function login(Request $request): JsonResponse
	{
		$credentials = $request->validate([
			'email' => ['required', 'string', 'email'],
			'password' => ['required', 'string'],
		]);

		if (! Auth::guard('web')->attempt($credentials, $request->boolean('remember'))) {
			throw ValidationException::withMessages([
				'email' => __('auth.failed'),
			]);
		}

		$request->session()->regenerate();

		return response()->json([
			'user' => Auth::guard('web')->user(),
		]);
	}

	/**
	 * Log the current user out and invalidate their session.
	 */
	public function logout(Request $request): JsonResponse
	{
		Auth::guard('web')->logout();

		$request->session()->invalidate();
		$request->session()->regenerateToken();

		return response()->json([
			'message' => 'Logged out.',
		]);
	}
}
