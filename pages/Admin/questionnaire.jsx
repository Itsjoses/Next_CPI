import { NavbarLayout } from "@/components/ThemeComponent/ThemeComponent";
import {
  Card,
  CardSecondary,
  DimensionCard,
} from "@/components/Utility/Admin/HomeComponent";
import React from "react";

export default function questionnaire() {
  return (
    <NavbarLayout>
      <div className="p-5 w-full h-screen overflow-scroll">
        <div className="Top-Title">
          <div className="Title text-4xl font-bold">
            <p>Questionnaire</p>
          </div>
          <div className="flex items-center my-3">
            <p className="block font-bold ">Questionnaire year: </p>
            <div className="ms-2 block">
              <select name="" id="">
                <option value="-">-</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4 my-5 flex-col sm:flex-row">
          <div className="flex justify-between w-full gap-4 flex-col lg:flex-row">
            <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
              <div className="Card Title py-2">
                <p className="font-bold">Total Responses</p>
              </div>
              <div className="Card Content flex items-center">
                <p className="font-bold text-4xl">28</p>
                <p className="ml-3">Participants</p>
              </div>
            </Card>
            <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
              <div className="Card Title py-2">
                <p className="font-bold">Total Responses</p>
              </div>
              <div className="Card Content flex items-center">
                <p className="font-bold text-4xl">28</p>
                <p className="ml-3">Participants</p>
              </div>
            </Card>
          </div>
          <div className="flex justify-between w-full gap-4 flex-col lg:flex-row">
            <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
              <div className="Card Title py-2">
                <p className="font-bold">Total Responses</p>
              </div>
              <div className="Card Content flex items-center">
                <p className="font-bold text-4xl">28</p>
                <p className="ml-3">Participants</p>
              </div>
            </Card>
            <Card className="w-full bg-white h-32 rounded-md transition:w duration-500 py-4 px-6 ">
              <div className="Card Title py-2">
                <p className="font-bold">Total Responses</p>
              </div>
              <div className="Card Content flex items-center">
                <p className="font-bold text-4xl">28</p>
                <p className="ml-3">Participants</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="Dimension my-5">
          <Card className="w-full rounded-md p-5 gap-4 flex flex-col">
            <p className="font-semibold text-2xl">Dimension</p>
            <div className="Searching">
              <input
                type="text"
                className="ring-2 rounded-md p-2"
                placeholder="Search..."
              />
            </div>
            <div className="max-h-64 gap-4 flex flex-col overflow-scroll">
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
              <DimensionCard name="this is testing data" total={"20"} />
            </div>
          </Card>
        </div>

        <div className="Question my-5">
        <Card className="w-full rounded-md p-5 gap-4 flex flex-col">
        <p className="font-semibold text-2xl">Indicator</p>

        </Card>
        </div>
      </div>
    </NavbarLayout>
  );
}
