<?php
namespace App\ModelServices;

use App\User;
use App\Commons\CommonFunctions;

class UserServices
{
  public function getUser($userId)
  {
    try {
      $user = User::find($userId);
      $user->getStatus;
      $user->getRole;
      return $user;
    } catch (\Throwable $th) {
      //throw $th;
      return false;
    }
  }

  public function createUser($data)
  {
    try {
      $data['uuid'] = CommonFunction::generateUserId();
      $data['password'] = bcrypt($input['password']);
      $user = User::create($data);
      $rs['token'] = $user->createToken('MyApp')->accessToken;
      $rs['name'] = $user->name;
      return $rs;
    } catch (\Throwable $th) {
      // throw $th;
      return false;
    }
  }
}
