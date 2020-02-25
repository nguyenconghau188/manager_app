<?php

use Illuminate\Database\Seeder;
use App\Roles;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Schema::disableForeignKeyConstraints();
        DB::table('roles')->truncate();
 
        $roles = [
            'no_roles',
            'admin',
            'staff',
            'customer',
            'guest',
        ];
 
        foreach ($roles as $role) {
            Roles::create([
                'name_role' => $role,
            ]);
        }
 
        Schema::enableForeignKeyConstraints();
    }
}
