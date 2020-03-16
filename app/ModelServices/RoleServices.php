<?php
namespace App\ModelServices;

use App\Roles;
use App\Commons\CommonFunctions;
use App\Commons\Constants;


class RoleServices {
  private $roles;

  public function __construct(Roles $roles) {
    $this->roles = $roles;
  }

  public function getRoles() {
    try {
      $roles = $this->roles->all();
      if (count($roles) > 0) {
        return $roles;
      }
      return false;
    } catch (\Throwable $th) {
      //throw $th;
      return false;
    }
  }
}