<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\ModelServices\RoleServices;

class RoleController extends Controller
{
    //
    public $successStatus = 200;
    private $roleSerivces;

    public function __construct(RoleServices $roleSerivces) 
    {
        $this->roleSerivces = $roleSerivces;
    }

    public function getRoles() 
    {
        $roles = $this->roleSerivces->getRoles();
        if ($roles) {
            return response()->json(['data'=>$roles], $this->successStatus);
        }
        return response()->json(['error'=>'Can not find any roles'], 401);
    }
}
