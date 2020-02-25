<?php

use Illuminate\Database\Seeder;
use App\UserStatus;

class UserStatusTableSeeder extends Seeder
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
        DB::table('user_status')->truncate();
 
        $status = [
            'disabled',
            'actived',
            'user_disabled',
            'banned'
        ];

        foreach ($status as $stt) {
            UserStatus::create([
                'status_name' => $stt
            ]);
        }
 
        Schema::enableForeignKeyConstraints();
    }
}
