<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelServices\UserServices;
use Validator;
use Illuminate\Support\Facades\Auth; 

class UserController extends Controller
{
    public $successStatus = 200;
    private $userSerivces;

    public function __construct(UserServices $userSerivces) {
        $this->userSerivces = $userSerivces;
    }

    // login api
    // @return Illuminate\Http\Response;
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['user'] = $user;
            return response()->json(['data'=>$success], $this->successStatus);
        }
        else {
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }

    // register api
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
            'phone_number' => 'regex:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $success = $this->userSerivces->createUser($input);
        if ($success) {
            return response()->json(['success'=>$success], $this->successStatus);
        }
        return response()->json(['error'=>'Create user error!'], 401);
    }

    // details api
    public function details()
    {
        $auth = Auth::user();
        $user = $this->userSerivces->getUser($auth->id);
        if ($user) {
            return response()->json(['success'=>$user], $this->successStatus);
        }
        return response()->json(['error'=>'User is not available!'], 401);
    }

    // get users api with paginate
    public function users()
    {
        $users = $this->userSerivces->getUsers();

        if ($users) {
            return response()->json(['success'=>$users], $this->successStatus);
        }
        return response()->json(['error'=>'Error!'], 401);
    }
}