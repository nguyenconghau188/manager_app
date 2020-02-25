<?php
namespace App\Commons;

use App\Commons\Constants;

class CommonFunctions
{
  public static function generateUserId($length_of_string=Constants::USER_ID_LENGTH) {
    return substr(md5(uniqid().time()), 0, $length_of_string);
  }
}
