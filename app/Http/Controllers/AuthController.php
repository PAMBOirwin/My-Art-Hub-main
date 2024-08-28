<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function show_register(){
        return inertia('Auth/Register');
    }


    public function register_client(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|regex:/[a-zA-Z]/',

        ]);


        $user= new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role_id = Role::Where('name', 'client')->first()->id;
        $user->save();


        Auth::login($user);

        return Inertia::location(route('home'));
    }

    public function register_artiste(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'nationalité' => 'required',
            'date_de_naissance' => 'required',
            'biographie' => 'required',
            'password' => 'required|min:8|regex:/[a-zA-Z]/',
        ]);

      $user= new User();

      $user->name = $request->name;
      $user->email = $request->email;
      $user->nationalité = $request->nationalité;
      $user->date_de_naissance = $request->date_de_naissance;
      $user->biographie = $request->biographie;
      $user->password = Hash::make($request->password);
      $user->role_id = Role::Where('name', 'artiste')->first()->id;
      $user->save();

      Auth::login($user);

      return Inertia::location(route('home'));
}

public function show_login(){
    return inertia('Auth/Login');
}

public function login(Request $request){
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);
    if (Auth::attempt($request->only('email', 'password'))) {
        return Inertia::location(route('home'));
    }
    return Inertia::location(route('login_show'));

}

public function logout(){
    Auth::logout();
    return Inertia::location(route('home'));
}

}
