import { useState } from "react";
import './App.css';
import Inputform from './components/Inputform';

const App = () => {

  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      className: "username-signup",
      placeholder: "Type Your Firstname and Lastname",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      className:"phone-signup",
      placeholder: "Type Your PhoneNumber",
      errorMessage:
        "phone number must include 12 number",
      label: "Phone number",
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      className:"email-signup",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 45,
      className: "gender-signup",
      label: "Gender",
    },
    {
      id: 4,
      name: "Gender",
      type: "radio",
      className: "male-signup",
      value: "Male",
      label: "male",
    },
    {
      id: 5,
      name: "Gender",
      type: "radio",
      value: "Female",
      className: "female-signup",
      label: "female",
    },
    {
      id: 6,
      name: "birthday",
      type: "date",
      className:"birthday-signup",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 7,
      name: "password",
      type: "password",
      className:"password-signup",
      placeholder: "Type Your Password",
      errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      className:"confirmpassword-signup",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

const handleSubmit = (e)=>{
  e.preventDefault();     // prevent from refresh
}

const onChange = (e)=>{
   setValues({...values,[e.target.name]: e.target.value});
}

console.log(values)

return (

  <div className="App">
   <form onSubmit={handleSubmit}>

    <h1>Register</h1>
    
    {inputs.map((input) =>  (

     <Inputform key ={input.id}   {...input}  value={values[input.name]} onChange={onChange}/> 
     
    ))}
    
    <button>SignUp</button>

    </form>
  </div>
  );

};

export default App;
