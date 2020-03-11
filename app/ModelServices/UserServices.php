<?php
namespace App\ModelServices;

use App\User;
use App\Commons\CommonFunctions;
use App\Commons\Constants;

class UserServices
{

  private $users;

  public function __construct(User $users) {
    $this->users = $users;
  }

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

  public function getUserByUuid($uuid)
  {
    try {
      $user = User::where('uuid', $uuid)->get();
      if ($user) {
        $user->getStatus;
        $user->getRole;
        return $user;
      }
      return false;
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

  public function getUsers()
  {
    try {
      // $users = User::latest()->paginate(Constants::NUM_PER_PAGE);
      $users = $this->users->users()->paginate(15);
      $result = [
        'pagination' => [
            'total' => $users->total(),
            'per_page' => $users->perPage(),
            'current_page' => $users->currentPage(),
            'last_page' => $users->lastPage(),
            'from' => $users->firstItem(),
            'to' => $users->lastItem()
        ],
        'data' => $users
      ];
      return $result;
    } catch (\Throwable $th) {
      //throw $th;
      return false;
    }
  }
}
