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
    degree: "",
  });
 
  const [count, setCount] = useState(1);


const inputsP = [
    {
      id: "Username-signup",
      name: "username",
      type: "text",
      className: "username-signup",
      placeholder: "Type Your Username",
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
      pattern: "^(00201|201|01)[0-2,5]{1}[0-9]{8}$",
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
    {
      id: "Upload-signup",
      name: "upload",
      type: "file",
      className:"upload-signup",
      htmlFor: "Upload-signup",
      label: "Upload Your Photo",
    },
  ];

  const inputsD = [
    {
      id: "Username-signupD",
      name: "username",
      type: "text",
      className: "username-signupD",
      placeholder: "Type Your Username",
      errorMessage:
        "Username shouldn't include any special character!",
      htmlFor: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "Phone-signupD",
      name: "phone",
      type: "tel",
      className:"phone-signupD",
      placeholder: "Type Your PhoneNumber",
      errorMessage:
        "phone number must include 11 number",
      htmlFor: "Phone number",
      label: "Phone number",
      pattern: "^(00201|201|01)[0-2,5]{1}[0-9]{8}$",
      required: true,
    },
    {
      id: "Email-signupD",
      name: "email",
      type: "email",
      className:"email-signupD",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      htmlFor: "Email",
      label: "Email",
      required: true,
    },
    {
      id: "Birthday-signupD",
      name: "birthday",
      type: "date",
      className:"birthday-signupD",
      placeholder: "Birthday",
      htmlFor: "Birthday",
      label: "Birthday",
    },
    {
      id: "Password-signupD",
      name: "password",
      type: "password",
      className:"password-signupD",
      placeholder: "Type Your Password",
      errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      htmlFor: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "Confirmpassword-signupD",
      name: "confirmPassword",
      type: "password",
      className:"confirmpassword-signupD",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      htmlFor: "Confirm Password",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: "Upload-signupD",
      name: "upload",
      type: "file",
      className:"upload-signupD",
      htmlFor: "Upload-signup",
      label: "Upload Your Photo",
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

    <div className="choose">

    <button id="choose-patient" type = "button" 
    onClick=
    {() => setCount(1)}>Patient</button>
    <button id="choose-doctor" type = "button"
    onClick=
    {() => setCount(2)}>Doctor</button>
   </div>

   {count === 1 ? (

   <form onSubmit={handleSubmit} id = "patient-form">

    <h1>Patient Register</h1>
    <hr/>
    {inputsP.map((input) =>  (

     <Inputform key ={input.id}   {...input} value={values[input.name]} onChange={onChange}/> 
     
    ))}
    
    <div className="gender-signup" id = "Gender-signup">
         <label>Gender</label>
            <select>
              <option value = "" id = "selectS">your Gender</option>
              <option value = "male">Male</option>
              <option value = "female">Female</option>
            </select>
    </div>

    <button className="patient-signup" type = "submit">SignUp</button>

    </form>

    ) : null}

 {count === 2 ? (

      <form onSubmit={handleSubmit} id = "doctor-form">

        <h1>Doctor Register</h1>
        <hr/>
        {inputsD.map((input) =>  (

        <Inputform key ={input.id}   {...input}  value = {values[input.name]} onChange={onChange}/>
    
        ))}
        <div className="gender-signupD" id = "Gender-signupD">
         <label>Gender</label>
            <select name = "gender">
              <option value = "" id = "selectS">your Gender</option>
              <option value = "male">Male</option>
              <option value = "female">Female</option>
            </select>
         </div>
         <div className="specialization-signupD" id = "Specialization-signupD">
         <label>specialization</label>
            <select name = "specialization">
              <option value = "" id = "selectS">your specialization</option>
              <option value = "Allergists">Allergists</option>
              <option value = "Dermatologists">Dermatologists</option>
              <option value = "Infectious">Infectious disease</option>
              <option value = "Obstetrician">Obstetrician/gynecologists</option>
              <option value = "Cardiologists">Cardiologists</option>
              <option value = "Endocrinologists">Endocrinologists</option>
              <option value = "Gastroenterologists">Gastroenterologists</option>
              <option value = "Nephrologists">Nephrologists</option>
              <option value = "Urologists">Urologists</option>
              <option value = "Pulmonologists">Pulmonologists</option>
              <option value = "Neurologists">Neurologists</option>
              <option value = "Psychiatrists">Psychiatrists</option>
              <option value = "Oncologists">Oncologists</option>
              <option value = "Radiologists">Radiologists</option>
              <option value = "Rheumatologists">Rheumatologists</option>
              <option value = "General surgeons">General surgeons</option>
              <option value = "Orthopedic surgeons">Orthopedic surgeons</option>
              <option value = "Cardiac surgeonssychiatrists">Cardiac surgeons</option>
              <option value = "Anesthesiologists">Anesthesiologists</option>
            </select>
         </div>
         <div className="degree-signupD" id = "Degree-signupD">
         <label>Your degree</label>
         <input type = "text" name = "degree" value = {values.degree}
          placeholder = "Type Your degree" onChange={onChange}/>
         </div>
        <button className="doctor-signup" type = "submit">SignUp</button>

</form>

 ): null}

  </div>
  
  );

};

export default App;
