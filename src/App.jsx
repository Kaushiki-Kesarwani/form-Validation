
import './App.css'
import { useForm } from "react-hook-form"
function App() {
  
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{ //handle submit will provide data
    console.log("Submitting the forms",data);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'> 
          <div>    
       <label htmlFor="firstname">First name : </label>
       <input type="text" id='firstname' placeholder='Enter name' className={errors.firstName?'err':""}{...register('firstName',{required:"User name is required" ,
        minLength: {value:8,message : "Atleast 8 characters required"},
         maxLength:{value:13, message : "Atmost 13 characters required"}})}/>
          {errors.firstName && <p>{errors.firstName.message}</p>}
       </div>
       <br />
      

        <div>
        <label htmlFor="middlename">Middle name (Optional): </label>
       <input type="text" id='middlename' placeholder='Middle name' className={errors.middleName?'err':""} {...register('middleName' ,{minLength: {value :5,message : "Atleast 5 characters required"},
         maxLength:{value :13, message : "Atmost 13 characters required" }})}/>
         {errors.middleName && <p>{errors.middleName.message}</p>}
        </div>
       <br />
       

<div>
          <label htmlFor="lastname">Last name : </label>
       <input type="text" id='lastname' placeholder='Last name' className={errors.lastName?'err':""}{...register('lastName' ,{required:'last name is required',
         minLength:{value : 10 ,message : "Atleast 10 characters required"}, maxLength:{value:13 , message : "Atmost 13 characters required" }, pattern: /^[A-Za-z]+$/i  //only alphabet letters 
        })}/>
         {errors.lastName && <p>{errors.lastName.message}</p>}
</div>
       <br />
       

<div>
       <label htmlFor="e-mail">E-mail : </label>
       <input type="email" id='e-mail' placeholder='E-mail' className={errors.email?'err':""} {...register('email' ,{required: "required field" })}/>
        {errors.email && <p>{errors.email.message}</p>}
</div>
       <br />
        

       <div>
       <label htmlFor="age">age : </label>
       <input type="number" id='age' placeholder='Enter age ' className={errors.age?'err':""}{...register('age' ,{required:"required field" ,min :{value:18, message : "Minimum age must be 18"} , max :{value:60,message :  "Maximum age must be 60"}})}/>
        {errors.age && <p>{errors.age.message}</p>}
</div>
       <br />


       <div>
       <label htmlFor="password">password : </label>
       <input type="password" id='password' placeholder='Enter password ' className={errors.password?'err':""} {...register('password' ,{required:'password is required' ,validate:value=> value !== "12345678" || "Weak password" ,minLength:{value: 8,message:'Password must contain at least 8 characters'}})}/>
       {errors.password && <p>{errors.password.message}</p>}
</div>
       <br />


       <button >submit</button>
       </form>
      </div>
    </>
  )
}

export default App
