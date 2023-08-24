import React, { useState } from "react";
import Header from "@/components/Utility/Header/Sidebar";
import { NavbarLayout, SecondaryColor, ThirdColor } from "@/components/ThemeComponent/ThemeComponent";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Card } from "@/components/Utility/Admin/HomeComponent";
import { BarChartOverView } from "@/components/Utility/Admin/BarChart";
export default function Home() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <NavbarLayout>
      <div className="p-5 w-full h-full overflow-scroll">
        <div className="Top-Title">
          <div className="Title text-4xl font-bold">
            <p>Dashboard</p>
          </div>
          <div className="flex items-center my-3">
          <p className="block font-bold ">Questionnaire year: </p>
          <div className="ms-2 block">
            <select name="" id="" >
              <option value="-">-</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          

        </div>
        
        </div>

        <div className="flex justify-between gap-4 my-6 flex-col sm:flex-row">
          <div className="flex justify-between w-full gap-4 flex-col lg:flex-row">
          <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
            <div className="Card Title py-2"><p className="font-bold">Total Responses</p></div>
            <div className="Card Content flex items-center">
              <p className="font-bold text-4xl">28</p>
              <p className="ml-3">Participants</p>
            </div>
          </Card>
          <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
            <div className="Card Title py-2"><p className="font-bold">Total Responses</p></div>
            <div className="Card Content flex items-center">
              <p className="font-bold text-4xl">28</p>
              <p className="ml-3">Participants</p>
            </div>
          </Card>
          </div>
          <div className="flex justify-between w-full gap-4 flex-col lg:flex-row">
          <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
            <div className="Card Title py-2"><p className="font-bold">Total Responses</p></div>
            <div className="Card Content flex items-center">
              <p className="font-bold text-4xl">28</p>
              <p className="ml-3">Participants</p>
            </div>
          </Card>
          <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
            <div className="Card Title py-2"><p className="font-bold">Total Responses</p></div>
            <div className="Card Content flex items-center">
              <p className="font-bold text-4xl">28</p>
              <p className="ml-3">Participants</p>
            </div>
          </Card>
          </div>
        </div>
        <div className="box-border Chart flex gap-4 mt-8 flex-col lg:flex-row">
          <Card className="box-border w-full lg:w-3/5 bg-white h-[28rem] rounded-md transition:w duration-500 flex flex-col p-5">
            <p className="box-border mb-4 font-semibold">Responses Overview</p>
            <BarChartOverView/>
          </Card>
          <Card className="w-full lg:w-2/5 bg-white h-[28rem] rounded-md transition:w duration-500"></Card>
        </div>
        
      </div>
    </NavbarLayout>
  );
}
