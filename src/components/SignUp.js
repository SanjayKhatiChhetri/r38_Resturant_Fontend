import React from 'react';
import ReactDOM from 'react-dom';
import './SignUp.css';


export default function signup() {
   return (

      <div class="wrapper">
            <div class="text-center mt-4 name"> Create a Account </div>
            <form class="p-3 mt-3">

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="text" name="user_name" id="userName" placeholder="Username"/> </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-envelope"></span> <input type="email" name="email" id="email" placeholder="Email"/> </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"/> </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="text" name="store_name" id="UserName" placeholder="Store Name"/> </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="Address" name="address" id="userName" placeholder="Address"/> </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="text" name="operating_hours" id="userName" placeholder="Operating hours"/> 
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Opening Time <input type="time" name="userName" id="userName" placeholder="Opening Time"/> </div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Closing Time <input type="time" name="userName" id="userName" placeholder="Closing Time"/> </div>
                </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="img" alt = '' name="image" id="userName" placeholder="image"/> 
                <img src="https://th.bing.com/th/id/R.02df0c72f4765b171bb7c3e7d7bca5e4?rik=bCx1aPj72h6RUA&pid=ImgRaw&r=0" alt="submit" width="200"></img>
                </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="text" name="resturant_type" id="userName" placeholder="Resturant Type"/> 
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Buffet <input type ='checkbox' name ='userName' value ='buffet' ></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Fast Food <input type ='checkbox' name ='userName' value ='Fast Food' ></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Fast Casual <input type ='checkbox' name ='userName' value ='Fast Casual' ></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Casual Dinning <input type ='checkbox' name ='userName' value ='Casual Dinning' ></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> Fine Dinning <input type ='checkbox' name ='userName' value ='Fine Dinning' ></input></div>
                </div>

                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> <input type="text" name="price" id="userName" placeholder="price"/> 
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> € <input type ='checkbox' name ='userName'></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> €€ <input type ='checkbox' name ='userName'></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> €€€ <input type ='checkbox' name ='userName'></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> €€€€ <input type ='checkbox' name ='userName'></input></div>
                <div class="form-field d-flex align-items-center"> <span class="fa fa-user"></span> €€€€€ <input type ='checkbox' name ='userName'></input></div>
                </div>

                <button class="btn mt-3">Register</button>

            </form>
      </div>
   )
}


