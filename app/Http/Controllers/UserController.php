<?php

namespace App\Http\Controllers;
use Socialite;
use App\User;

use Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
   // Metodo encargado de la redireccion a Facebook
   public function redirectToProvider($provider)
   {
       return Socialite::driver($provider)->redirect();
   }
   
   // Metodo encargado de obtener la información del usuario
   public function handleProviderCallback($provider)
   {
       // Obtenemos los datos del usuario
       $social_user = Socialite::driver($provider)->user(); 
       // Comprobamos si el usuario ya existe
       if ($user = User::where('email', $social_user->email)->first()) { 
           return $this->authAndRedirect($user); // Login y redirección
       } else {  
           // En caso de que no exista creamos un nuevo usuario con sus datos.
           $user = User::create([
               'name' => $social_user->name,
               'email' => $social_user->email,
               'avatar' => $social_user->avatar,
           ]);

           return $this->authAndRedirect($user); // Login y redirección
       }
   }

   // Login y redirección
   public function authAndRedirect($user)
   {
       Auth::login($user);
       
       return redirect()->to('/home#');
   }


   
   public function user(){
    $user=Auth::user();
   // $user=User::find($id);
    if($user !=null)
     return response()->json($user, 200);
   
    else
    return response()->json("null", 200);
}
public function logout() {
    Auth::logout();

    return response()->json([
        'status' => 'success',
        'message' => 'logout'
    ], 200);
}
}
 