import React from "react"
import { useForm } from "react-hook-form";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login () {
    const { register, formState:{errors}, handleSubmit } = useForm()
     
    console.log("register ===>", register)

    const nom= register("nom", {required:"le nom est obliagatoire", maxLength:{value:15,message:"la longueur n'est pas valide"}})
    const password= register('password', {required:"le mot de passe est obligatoire", minLength:{value:6,message:"le mot de passe n'est pas valide"}})

    const reussite = (data) => {
    console.log(data)
}
   const echec = (errors) => {
    console.errors(errors)
}
return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(reussite, echec)}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nom</label>
    <input type="text" className="form-control" id="userName" {...nom}/>
     {/* {errors.nom?.type=== "required" && <span className="alert alert-danger">{errors.nom.required}</span>}  */}
    {errors.nom?.type=== "maxLength" && <div className="alert alert-danger">{errors.nom.message}</div>}
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"{...password}/>
    {errors.password?.type=== "minLength" && <div className="alert alert-danger">{errors.password.message}</div>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}