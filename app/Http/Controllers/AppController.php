<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    public function index (){
        $user= Auth::user();
        return inertia('Home', ['user' => $user]);
    }

    public function dashbord (){
        $user= Auth::user();
        return inertia('Dashbord', ['user' => $user]);
    }

    public function artistes (){
        $user= Auth::user();
        return inertia('Artistes', ['user' => $user]);
    }

    public function profilArtiste (){
        $user= Auth::user();
        return inertia('profilArtiste', ['user' => $user]);
    }
}
