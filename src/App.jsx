
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
       <label htmlFor="firstname">Firstname : </label>
       <input type="text" id='firstname' placeholder='Enter name' {...register('firstName')}/>
       </div>
       <br />

        <div>
        <label htmlFor="middlename">Middlename : </label>
       <input type="text" id='middlename' placeholder='Middle name' {...register('middleName')}/>
        </div>
       <br />

<div>
          <label htmlFor="lastname">Lastname : </label>
       <input type="text" id='lastname' placeholder='Last name' {...register('lastName')}/>
</div>
       <br />

<div>
       <label htmlFor="e-mail">E-mail : </label>
       <input type="email" id='e-mail' placeholder='E-mail' {...register('email')}/>
</div>
       <br />

       <button >submit</button>
       </form>
      </div>
    </>
  )
}

export default App
