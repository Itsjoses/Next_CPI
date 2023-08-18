import { FontColor, FontNavbar, PrimaryColor, SecondaryColor } from '@/components/ThemeComponent/ThemeComponent'
import { ALink, BallBounce, ButtonComponent, TextFieldCustom, Title } from '@/components/Utility/LoginRegis/LogRegComponent'
import { Rest } from '@/components/Utility/api/api'
import { GetUserContext } from '@/useContext/UserComponent'
import axios from 'axios'
import { useRouter } from 'next/router'

import React, { useContext, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'

export default function Login() {
	const route = useRouter()
    const email = useRef()
    const pass = useRef()
	const cookies = new Cookies()
	const {user, setUser} = GetUserContext()

	useEffect(() => { 
		console.log(user);
	}, [user])
	

    const handleLogin = async (e) => {
        e.preventDefault()
		const emailValue = email.value
		const passwordValue = pass.value

		// await Rest.fetchData("sanctum/csrf-cookie","GET").then(response => {
		// 	console.log(response);

		// }).catch(response => {
		// 	console.log(response);
		// })

		await axios.get("http://localhost:8000/sanctum/csrf-cookie",{
			withCredentials: "include"
		}).then(response => {
			console.log(response);
			
			// cookies.set("Authorization",response.headers['x-xsrf-token'])
		})

		const loginPromise = axios.post("http://localhost:8000/api/auth/login",{
			email: emailValue,
			password: passwordValue
		},{
			withCredentials: true
		}).then(async (response) =>{
			cookies.set("Authorization",response.data.token)
			return await axios.get("http://localhost:8000/api/auth/user",{
				headers:{
					Authorization: `Bearer ${response.data.token}`
				}
			}).then(response =>{
				console.log(response);
				setUser(response.data.user)
				route.push('/Admin/')
				return response
			})
		})

		toast.promise(
			loginPromise,
			{
			  pending: {
				render(){
				  return "Processing..."
				},
				icon: false,
			  },
			  success: {
				render({data}){
					// console.log(data);
				  return `welcome, ${data.data.user.name}`
				},
				// other options
				icon: "🟢",
			  },
			  error: {
				render({data}){
				  // When the promise reject, data will contains the error
				  console.log(data);
				  return `Error: ${data.response.data.message}`
				}
			  }
			}
		)
	

    }

	

  return (
    <div className='flex w-screen h-screen'>
        <BallBounce Type={"login"}></BallBounce>
        <SecondaryColor className='w-full lg:w-1/2 h-full flex justify-center items-center'>

		<div className="max-w-sm md:max-w-md w-11/12 space-y-8 bg-white p-2 rounded-md">
			<Title Title={"Let's Head Inside"}/>

			<div className="mt-4 rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">

				<form className="space-y-4" action="#" method="POST">
					<input type="hidden" name="remember" value="True"/>
					<div className="rounded-md shadow-sm -space-y-px">
						<div className="grid gap-6">
							<TextFieldCustom Type={"text"} Label={"Email"} Myref={email}/>
							<TextFieldCustom Type={"password"} Label={"Password"} Myref={pass}/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<ALink Label={"Don't have an account?"} Path={"/Register"}/>
					</div>
					<ButtonComponent Label={"Sign Up"} handleClick={handleLogin}/>
				</form>
		</div>
	</div>
        </SecondaryColor>
    </div>
  )
}
