import { SecondaryColor } from '@/components/ThemeComponent/ThemeComponent'
import { ALink, BallBounce, ButtonComponent, GenreCustom, TextFieldCustom, Title } from '@/components/Utility/LoginRegis/LogRegComponent'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

export default function Register() {

    const name = useRef()
    const email = useRef()
    const pass = useRef()
    const confPass = useRef()
    const gender = useRef()
    const handleLogin = async(e) => {
        e.preventDefault()
        console.log(name.value)
        console.log(email.value)
        console.log(pass.value)
        console.log(confPass.value)
        console.log(gender.value)
    }

  return (
    <div className='flex w-screen h-screen'>
    <BallBounce Type={"Register"}></BallBounce>
    <SecondaryColor className='w-full lg:w-1/2 h-full flex justify-center items-center'>

    <div className=" max-w-sm md:max-w-md w-11/12 bg-white p-2 rounded-md">
        <Title Title={"Register Now"}/>
        <div className="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
            <form className="space-y-4" action="#" method="POST">
                <input type="hidden" name="remember" value="True"/>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="grid gap-3.5">
                        <TextFieldCustom Type={"text"} Label={"Name"} Myref={name}/>
                        <TextFieldCustom Type={"email"} Label={"Email"} Myref={email}/>
                        <TextFieldCustom Type={"password"} Label={"Password"} Myref={pass}/>
                        <TextFieldCustom Type={"password"} Label={"Confirm Password"} Myref={confPass}/>
                        <GenreCustom Label={"Gender"} Myref={gender} attr={
                            <>
                            <option> - </option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            </>
                        }></GenreCustom>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <ALink Label={"Already have an account?"} Path={"/"}/>
                </div>
                <ButtonComponent Label={"Sign Up"} handleClick={handleLogin}/>
            </form>
    </div>
</div>
    </SecondaryColor>
    
</div>
  )
}
