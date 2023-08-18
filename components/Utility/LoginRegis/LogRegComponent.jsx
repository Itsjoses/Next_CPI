import { PrimaryColor } from "@/components/ThemeComponent/ThemeComponent";
import { ThemeContext } from "@/useContext/ThemeComponent";
import { ThemeColorValue } from "@/value/GlobalValue";
import Link from "next/link";
import { useContext } from "react";

export function BallBounce({ Type }) {
  var state = "animate-bounce";
  if (Type == "login") state = "animate-bounce";
  else state = "animate-spin";
  return (
    <PrimaryColor className="hidden lg:flex h-screen w-1/2 flex items-center justify-center h-full relative">
      <div
        className={
          "w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full flex items-center justify-center " +
          state
        }
      >
        <div className="text-white text-4xl font-bold">CPI</div>
      </div>
      <div className="w-full h-[45%] backdrop-blur-lg absolute bottom-0"></div>
    </PrimaryColor>
  );
}

export function TextFieldCustom({Label,Type,Myref}) {
  return (
    <div className="col-span-12">
      <label
        form="email_address"
        className="block text-sm font-medium text-gray-700"
      >
        {Label}
      </label>
      <input
        type={Type}
        name="email_address"
        id="email_address"
        className="mt-1 ring-2 ring-indigo-500 px-4 py-2 h-12 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        ref={Myref}
        onChange={(e) => {
            Myref.value = e.target.value
        }}
      ></input>
    </div>
  );
}

export function GenreCustom({Label,Myref,attr}) {
  return (
    <div className="col-span-12">
      <label
        form="email_address"
        className="block text-sm font-medium text-gray-700"
      >
        {Label}
      </label>
      <select
        name="email_address"
        id="email_address"
        className="mt-1 ring-2 ring-indigo-500 px-4 py-2 h-12 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-white"
        ref={Myref}
        onChange={(e) => {
            Myref.value = e.target.value
        }}
      >
       {attr} 
      </select>
    </div>
  );
}

export function ButtonComponent({Label, handleClick}){
    return(
        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleClick}>
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {Label}
                            </button>
                        </div>
    )
}

export function Title({Title}){
    return (
        <div className='mt-4'>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					{Title}
				</h2>
			</div>
    )
}

export function ALink({Label,Path}){
return (
  <div className="text-sm">
							<Link href={Path} className="font-medium text-indigo-600 hover:text-indigo-500">
								{Label}
							</Link>
						</div>
    
)
}
