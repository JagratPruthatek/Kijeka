
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobAppForm = () => {

  document.title = "Kijeka | Job Apply"

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const [userinfo, setUserinfo] = useState();
  const onSubmit = (data) => {
    setUserinfo(data)
    console.log(data)
  }
  const notify = () => toast.success("Successfully Add data..");


  return (
    <>

      <ToastContainer />

      <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group mt-24">
        <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[18rem] duration-300 group"></div>
        <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Let's join We</h4>
      </div>

      <div className='my-5 ml-[3rem]'>
        <h1 className='text-[#004895] text-[1.2rem]  font-bold xl:text-[1.2rem] xl:text-bold'>Mechanical Engineer</h1>


      </div>
      {/*================================================================================================ */}
      <div className='flex space-x-3 my-3 ml-[3rem]'>
        <h4 className='text-[#101010] text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] lg:text-[1rem] lg:font-bold'>Schedule :<span className=' text-[1rem] font-thin'>Full Time</span> </h4>
        <h4 className='text-[#101010] text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] lg:text-[1rem] lg:font-bold'>Job Category :<span className=' text-[1rem] font-thin'> Engineering</span> </h4>

        <h4 className='text-[#101010] text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] lg:text-[1rem] lg:font-bold'>Requisition Number : <span className=' text-[1rem] font-thin'>MEF2001988F</span> </h4>


      </div>


      {/*=====================================================Form========================= */}
      <form onSubmit={handleSubmit((data) => console.log(data))}>

        <div className='my-3 ml-[3rem]'>
          <div className='flex space-x-[4rem] sm:flex sm:space-x-[4rem] md:flex md:space-x-[4rem] lg:flex lg:space-x-[4rem]  xl:flex xl:space-x-[4rem] '>
            <label className='py-1 mt-1 text-[1rem] text-[rgb(0,72,149)] font-bold'>Name:</label>
            <input
              {...register('name', {
                required: true, maxLength: 30
              })}

              type="text"
              name="name"



              //value={contactInfo.name}
              //onChange={handleChange}


              className='p-2 w-[16.5rem] h-[1.5rem] 
             py-2 mt-2  border border-[#004895] 
             rounded-md focus:outline-none
              focus:ring-1 focus:ring-blue-600  
             md:w-[16.5rem] lg:w-[16.5rem] xl:w-[16.5rem]' />


            {errors.name && <p className='text-red-700' >   Please add your full Name. </p>}
          </div>


          <div className='flex space-x-[4.2rem] sm:flex sm:space-x-[4.2rem] md:flex md:space-x-[4.2rem] lg:flex lg:space-x-[4.2rem] xl:flex xl:space-x-[4.2rem]'>
            <label className='py-1 mt-1 text-[1rem] text-[#004895] font-bold'>Email:</label>
            <input
              {...register('email', {
                required: 'Please add your Email ',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              type="email"
              name="email"

              // value={contactInfo.email}
              //onChange={handleChange}


              className=' p-2 w-[16.5rem] h-[1.5rem] py-2 mt-2
             border border-[#004895] rounded-md 
             focus:outline-none focus:ring-1
              focus:ring-blue-600
              md:w-[16.5rem] lg:w-[16.5rem] xl:w-[16.5rem]' />

            {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
          </div>

          <div className='flex space-x-[1.5rem] sm:flex sm:space-x-[1.5rem] md:flex md:space-x-[1.5rem] lg:flex lg:space-x-[1.5rem] xl:flex xl:space-x-[1.5rem]'>
            <label className='py-1 mt-1 text-[1rem] text-[#004895] font-bold'>Mobile No.:</label>
            <input
              {...register("number", {
                required: {
                  value: true,
                  message: "Please add your  number"
                },
                pattern: {
                  value: /^[0-9+-]+$/,
                  message: "This is not a valid mobile phone to me, try again!"
                },
                minLength: {
                  value: 6,
                  message: "This number is too short, not gotta fly, try again"
                },
                maxLength: {
                  value: 12,
                  message: "...And now it's too damn long, make sure the number is right, would you?"
                }
              })}

              type="number"
              name="number"


              className=' p-2 w-[16.5rem] h-[1.5rem] py-2 mt-2
             border border-[#004895] 
             rounded-md focus:outline-none 
             focus:ring-1 focus:ring-blue-600
             md:w-[16.5rem] lg:w-[16.5rem] xl:w-[16.5rem]' />

            {errors.number && <p className='text-red-700 pl-[2.6rem]'> {errors.number?.message}</p>}
          </div>

          <div className='flex space-x-[2.7rem] sm:flex sm:space-x-[2.7rem] md:flex md:space-x-[2.7rem] lg:flex lg:space-x-[2.7rem] xl:flex xl:space-x-[2.7rem]'>
            <label className='py-1 mt-1 text-[1rem] text-[#004895] font-bold'>Country :</label>
            <input
              {...register('country', { required: true })}

              type="text"
              name="country"

              //value={contactInfo.country}
              // onChange={handleChange}
              //required
              className=' p-2 w-[16.5rem] h-[1.5rem] py-2 
            mt-2 border border-[#004895]
             rounded-md focus:outline-none
              focus:ring-1 focus:ring-blue-600
              md:w-[16.5rem] lg:w-[16.5rem] xl:w-[16.5rem]' />
            {errors.country && <p className='text-red-700 pl-[1.5rem]'> Country  is required.</p>}
          </div>

          <div className='flex space-x-[2.7rem] sm:flex sm:space-x-[2.7rem] md:flex md:space-x-[2.7rem] lg:flex lg:space-x-[2.7rem] xl:flex xl:space-x-[2.7rem]'>
            <label className='py-1 mt-1 text-[1rem] text-[#004895] font-bold'>Address :</label>
            <input
              {...register('address', { required: true, maxLength: 5 })}
              type="text"
              name="address"


              //onChange={handleChange}
              //required
              className='p-2 w-[16.5rem] h-[1.5rem] py-2
             mt-2 border border-[#004895] rounded-md 
             focus:outline-none 
             focus:ring-1 focus:ring-blue-600
             md:w-[16.5rem] lg:w-[16.5rem] xl:w-[16.5rem]' />

            {errors.address && <p className='text-red-700 pl-[1.5rem]'> Address  is required.</p>}
          </div>

          <div className='flex space-x-4 my-2'>
            <label className='py-1 mt-1 text-[1rem] text-[#004895] font-bold'>Upload Resume </label>
            <input type="file"
              {...register('file')}
              className="block  w-[16.5rem] text-sm text-[D9D9D9]
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-[#D9D9D9] file:text-[#000]
      hover:file:bg-violet-100
    "/>
          </div>

          <div className='flex space-x-4'>

            <input type="checkbox"
              {...register('chek')}
              id="chek"
              name="chek"
              value="chek"
              className={`form-check-input ${errors.chek ? 'is-invalid' : ''}`}
            />

            <label className='py-1 mt-1 text-[0.7rem] text-[#004895] '>Agree All term and conditions</label>
            {errors.chek && <p className='text-red-700'> {errors.chek?.message}</p>}
          </div>

          <div className='flex space-x-4 my-3'>
            <input type="submit" onClick={notify} value="Apply Now" className='w-[30%] sm:w-[20%] md:w-[20%]  lg:w-[10%] xl:w-[10%] h-[2rem] py-1  px-5 mr-2 mb-2 text-sm font-medium text-[#004895] focus:outline-none bg-white rounded-lg border border-[#004895] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"' />

            <input type="submit" value="Cancel" onClick={() => reset()} className='w-[30%] sm:w-[20%] md:w-[20%] lg:w-[10%] xl:w-[10%] h-[2rem] py-1  px-5 mr-2 mb-2 text-sm font-medium text-[#004895] focus:outline-none bg-white rounded-lg border border-[#004895] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"' />
          </div>
        </div>
      </form>
    </>
  )
}

export default JobAppForm