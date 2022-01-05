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
      id: "Username-signup",
      name: "username",
      type: "text",
      className: "username-signup",
      placeholder: "Type Your Firstname and Lastname",
      errorMessage:
        "Username shouldn't include any special character!",
      htmlFor: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "Phone-signup",
      name: "phone",
      type: "tel",
      className:"phone-signup",
      placeholder: "Type Your PhoneNumber",
      errorMessage:
        "phone number must include 11 number",
      htmlFor: "Phone number",
      label: "Phone number",
      pattern: "^(00201|0201|201|01)[0-2,5]{1}[0-9]{8}$",
      required: true,
    },
    {
      id: "Email-signup",
      name: "email",
      type: "email",
      className:"email-signup",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      htmlFor: "Email",
      label: "Email",
      required: true,
    },
    {
      id: "Gender-signup",
      className: "gender-signup",
      htmlFor: "Gender",
      label: "Gender",
    },
    {
      id: "Male-signup",
      name: "gender",
      type: "radio",
      className: "male-signup",
      htmlFor: "male",
      value: "Male",
      label: "male",
    },
    {
      id: "Female-signup",
      name: "gender",
      type: "radio",
      value: "Female",
      className: "female-signup",
      htmlFor: "female",
      label: "female",
    },
    {
      id: "Birthday-signup",
      name: "birthday",
      type: "date",
      className:"birthday-signup",
      placeholder: "Birthday",
      htmlFor: "Birthday",
      label: "Birthday",
    },
    {
      id: "Password-signup",
      name: "password",
      type: "password",
      className:"password-signup",
      placeholder: "Type Your Password",
      errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      htmlFor: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "Confirmpassword-signup",
      name: "confirmPassword",
      type: "password",
      className:"confirmpassword-signup",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      htmlFor: "Confirm Password",
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

    <h1>Create Account</h1>
    <hr/>
    {inputs.map((input) =>  (

     <Inputform key ={input.id}   {...input} 
      value={values[input.name]}
      // eslint-disable-next-line
      value = {input.value} onChange={onChange}/> 
     
    ))}
    
    <button>SignUp</button>

    </form>
  </div>
  );

};

export default App;
