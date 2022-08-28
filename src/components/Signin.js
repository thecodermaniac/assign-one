import React from 'react'
import image from '../assets/image.png'
import topball from '../assets/topball.png'
import plus from '../assets/plus.png'
import google from '../assets/google.png'

function Signin() {
    return (
        <div className="min-w-screen min-h-screen bg-primary flex items-center justify-center px-5 py-5">
            <div
                className="bg-secondary text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                style={{ maxWidth: 1000 }}
            >
                <div className="md:flex w-full">
                    <div className="hidden md:block w-3/5 bg-secondary flex flex-col">
                        <div className='flex bg-primary'><img src={topball} alt="fireSpot" /></div>
                        <div className='w-full flex justify-center content-center bg-primary'>
                            <img src={image} alt="fireSpot" />
                        </div>
                        <div className='w-full flex justify-center flex-col  bg-primary '>
                            <div className='text-tertiary text-2xl mt-3 inline-flex justify-center font-bold'>
                                Game to change your loream
                            </div>
                            <span className='text-tertiary inline-flex justify-center pb-10 font-semibold'>
                                Lorem pasa appan djirfsn asdsfsnefsfo sfiesfesfin sfesifesn sefe
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 py-10 px-5 md:px-10 flex flex-col">
                        <div className='relative top-2 left-6'>
                            <img src={plus} alt="fireSpot"  className='h-7 w-auto' />
                        </div>
                        <div className='mt-3 px-3'>
                            <div className='text-greycus text-2xl mt-3 inline-flex justify-start font-semibold'>
                                Login to your Account
                            </div>
                            <span className='text-greycus text-xs inline-flex justify-start'>
                                See what is going on in game world
                            </span>
                            <div className='mt-8'>
                                <img src={google} alt="fireSpot" />
                            </div>
                            <div className='w-full text-greytwo text-xs mt-6 inline-flex justify-center'>
                                ------------- or Sign in with Email -------------
                            </div>

                            <div className="flex mx-3 flex-col">
                                <div className="w-full ">
                                    <label htmlFor="" className="w-full text-greycus text-xs mt-6 inline-flex justify-start">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full h-10 rounded-md border-2 border-tertiary outline-none focus:border-indigo-500"
                                        placeholder="    mail@abc.com"
                                    />
                                    <label htmlFor="" className="w-full text-greycus text-xs mt-6 inline-flex justify-start">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full h-10 rounded-md border-2 border-tertiary outline-none focus:border-indigo-500"
                                        placeholder="   ***********"
                                    />
                                </div>
                                <div className='flex justify-between px-3'>
                                    <div><input type="checkbox" name="vehicle1" value="Bike" />
                                        <label className='text-greytwo text-xs'> Remember me</label></div>
                                    <div>
                                        <span className='text-tertiary text-xs'>
                                            Forgot password?
                                        </span>
                                    </div>
                                </div>
                                <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm mt-8 py-2 w-full">Login</button>
                            </div>


                            <div className="flex justify-center mt-16">
                                <div className="text-greycus text-xs inline-flex">
                                    Not Registered Yet?
                                </div>
                                <div className="text-tertiary text-xs inline-flex font-semibold">
                                <pre> </pre> Create an account
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin