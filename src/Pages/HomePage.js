import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/log.css"


const HomePage = () => {
  

      const [name, setName] = useState('')
      const [surname, setSurname] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const navigate = useNavigate()
      
      


      //storing into local Storage
      
      
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){
      toast.error("Name is Required")
    }else if (surname === ""){
      toast.error("Surname is Required")
    } else if ( email === ""){
      toast.error("Email Address is Required")
    }else if (password === ""){
      toast.error("Password is Required")
    }else{
      
      localStorage.setItem('name',name)
      localStorage.setItem('surname',surname)
      
      localStorage.setItem('email',email)
      localStorage.setItem('Password',password)
    
      toast.success('User Succesfully Registered')
      navigate('/')

    }
  };

  return (
    <>
    
   
      <div className="container content mt-4">
        <h5 className="form__heading"> Please Complete form to Register </h5>
        <hr />
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Surname
              </label>
              <input
                type="text"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                className="form-control"
                id="exampleInputSurname"
                aria-describedby="emailHelp"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
           
            
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
            
          </div>
       

          
        </div>
      </div>
      
    </>
  );
};

export default HomePage;