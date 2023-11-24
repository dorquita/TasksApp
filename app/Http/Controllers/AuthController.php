<?php 

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            // Autenticación exitosa
            return Inertia::render('Dashboard');
        } else {
            // Autenticación fallida
            return Inertia::render('Auth/Login', ['error' => 'Credenciales incorrectas']);
        }
    }
}
