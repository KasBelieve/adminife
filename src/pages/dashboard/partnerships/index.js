import DashboardLayout from "layout/dashboardLayout";
import Partnertable from "./PartnerTable";
import React from "react";
import pix1 from "assets/images/mtn.png"
import id2 from "assets/images/tomi.png"
import id3 from "assets/images/user.png"
import id from "assets/images/girl.png"
import id5 from "assets/images/airtel.png"
import id6 from "assets/images/woman.png"
import greater from "assets/svgs/arrowRight.svg"


const PartnershipContents = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-semibold mt-3">In Partnership</h1>
        </div>




         {/* grid */}
      <div className="flex gap-20 justify-between  container mx-auto mt-10 sm:ml-12 sm:pl-14 ">
         {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20">
              <div className=""> 
                <img src={pix1} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl md:text-sm font-bold mt-8 mb-8 ml-24 lg:text-sm lg:font-bold lg:mt-8 lg:mb-8 lg:ml-24 lg:pl-2 ">
                MTN
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out lg:pr-12">View Details</a>
              </p>
              </div>  
            </div>
          </div>


          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20 ">
              <div className=""> 
                <img src={id2} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl pl-0 md:text-sm font-bold mt-8 mb-8 ml-20 lg:text-m lg:font-bold lg:mt-8 lg:mb-8 lg:ml-20 lg:pl-2 ">
              Tomi Olu
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out">View Details</a>
              </p>
              </div>  
            </div>
          </div>


          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20 ">
              <div className=""> 
                <img src={id3} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl pl-0 md:text-sm font-bold mt-8 mb-8 ml-20 lg:text-m lg:font-bold lg:mt-8 lg:mb-8 lg:ml-20 lg:pl-2 ">
              Wole Ade
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out">View Details</a>
              </p>
              </div>  
            </div>
          </div>


          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20">
              <div className=""> 
                <img src={id} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl  md:text-sm font-bold mt-8 mb-8 ml-12 lg:text-m lg:font-bold lg:mt-8 lg:mb-8 lg:ml-20 lg:pl-2 ">
              Ibukun Idun
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out">View Details</a>
              </p>
              </div>  
            </div>
          </div>


          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20 ">
              <div className=""> 
                <img src={id5} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl  md:text-sm font-bold mt-8 mb-8 ml-20 pl-2 lg:text-m lg:font-bold lg:mt-8 lg:mb-8 lg:ml-20 lg:pl-2 ">
              Airtel
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out">View Details</a>
              </p>
              </div>  
            </div>
          </div>



          <div card="rounded-xl shadow-lg lg:mr-28">
            <div className=" flex flex-col md:ml-1 mb-14 p-11 bg-slate-200 rounded-md  h-80 mx-11 w-80 lg:mr-120 sm:ml-20">
              <div className=""> 
                <img src={id6} className="h-28 w- ml-12 pl-4 "/> 
              </div>
              <h5 className="text-xl sm:pl-2  md:text-sm font-bold mt-8 mb-8 ml-12 lg:text-m lg:font-bold lg:mt-8 lg:mb-8 lg:ml-20 lg:pl-2 ">
              Sarah Badeh
              </h5>

              <div className="text-lg md:text-m font-medium text-slate-500  flex ml-16 pl-2">
              <p  className=" text-green-700">
                 <a href="#" className="underline hover:bg-green-200 focus:scale-95 transition-all duration-200 ease-out">View Details</a>
              </p>
              </div>  
            </div>
          </div>




        </div>

        
      </div>
      
         {/* horizontal slate */}

         {/* <div className=" flex flex-col md:ml-200 lg:ml-2000 lg:container mb-14 p-11 bg-slate-200 rounded-md  h-200 mx-24 h-280 w-80  "> */}
   
          <div className=" lg:absolute sm:ml-2 sm:pl-12 sm:w-auto lg:ml-auto lg:mt-28 lg:w-auto lg:mr-28 lg:h-auto p-11 bg-slate-200 rounded-md w-80 h-auto ml-24  right-0">
            <div className=""> <h1 className="text-3xl font-semibold mt-2 ">Notifications</h1>
            <hr className="border-t border-slate-400"/>
            </div>
             
            <div className="notification-container overflow-x-auto ">
              <div className=" flex items-center justify-between text-lg md:text-m font-medium text-slate-500 mt-12">
                 <p  className="">
                 Bisi Thomas sent a request to Volunteer with Oyedele foundation 
                </p>
                 <img src={greater} className="w-6 h-6 ml-2"/> 
              </div>  
              <hr className="border-t border-slate-400 my-12 w-full"/>


              <div className="flex items-center justify-between text-lg md:text-m font-medium text-slate-500 mt-12">
                 <p  className="">
                 Bisi Thomas sent a request to Volunteer with Oyedele foundation
                </p>
                <img src={greater} className="w-6 h-6 ml-2"/> 
              </div>
              <hr className="border-t border-slate-400 my-12 w-full"/>


              <div className="flex items-center justify-between text-lg md:text-m font-medium text-slate-500 mt-12">
                 <p  className="">
                 Bisi Thomas sent a request to Volunteer with Oyedele foundation 
                </p>
                <img src={greater} className="w-6 h-6 ml-2"/>  
              </div> 
              <hr className="border-t border-slate-400 my-12 w-full"/>


              <div className="flex items-center justify-between text-lg md:text-m font-medium text-slate-500 mt-12">
                 <p  className="">
                 Bisi Thomas sent a request to Volunteer with Oyedele foundation 
                </p>
                <img src={greater} className="w-6 h-6 ml-2"/> 
              </div>
              <hr className="border-t border-slate-400 my-12 w-full"/>
              </div>

         </div>
        

     <div>
        <h1 className="text-3xl font-semibold mt-3">Volunteers/Donators</h1>
     </div>  
     <Partnertable/>
         
    </DashboardLayout>
  );
};

export default PartnershipContents;
