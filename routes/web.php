<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AppController::class , 'index'])->name('home');
Route::get('/register', [AuthController::class , 'show_register'])->name('register');
Route::get('/login', [AuthController::class , 'show_login'])->name('login_show');
Route::post('/login_post', [AuthController::class , 'login'])->name('login');
Route::post('/register_client', [AuthController::class , 'register_client'])->name('register_client');
Route::post('/register_artiste', [AuthController::class , 'register_artiste'])->name('register_artiste');
Route::get('/logout', [AuthController::class , 'logout'])->name('logout');
Route::get('/dashbord', [AppController::class , 'dashbord'])->name('dashbord');
Route::get('/artistes', [AppController::class , 'artistes'])->name('artistes');
Route::get('/profilArtiste', [AppController::class , 'profilArtiste'])->name('profilArtiste');




