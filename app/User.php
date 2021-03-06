<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

// class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRole() 
    {
        return $this->hasOne('App\Roles', 'id', 'role');
    }

    public function getStatus()
    {
        return $this->hasOne('App\UserStatus', 'id', 'status');
    }

    public function users()
    {
        return DB::table('users')
                    ->join('roles', 'users.role', '=', 'roles.id')
                    ->join('user_status', 'users.status', '=', 'user_status.id')
                    ->select('users.*', 'roles.name_role as role_name', 'user_status.status_name as status_name')
                    ->latest();
    }
}
