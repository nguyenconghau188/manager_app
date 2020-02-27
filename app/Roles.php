<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    //
    protected $table = 'roles';

    public function users()
    {
        return $this->belongsTo('App\Users', 'role', 'id');
    }
}
