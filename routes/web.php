<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('admin', function () {
//     return view('admin.index');
// });
Route::group(['prefix' => 'admin'], function () {
    // echo 'admin';
    Route::any('{all?}', function() {
        return view('admin.index');
    })->where('all', '.*');
});
Route::get('/', function () {
    return view('welcome');
});
