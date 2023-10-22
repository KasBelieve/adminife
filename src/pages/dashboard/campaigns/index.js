import DashboardLayout from "layout/dashboardLayout";
import React from "react";
import pix1 from "assets/images/campaign-image.png";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CampaignsContents = () => {
  return (
    
    <DashboardLayout>
     
      <div className="flex justify-between">
      <h1 className="text-2xl font-semibold mt-3">Campaigns</h1>
        <div >
        <TaiwindCSSButton>
        
     
      Start New Campaign
        
         
         </TaiwindCSSButton>
        </div>  
      </div>
      <div className="flex gap-20 font-semibold mt-4" >
        <a href="campaigns" className="hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out rounded px-2"> All Campaigns</a>
        <a href="campaigns" className="hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out rounded px-2" > Ongoing Campaigns</a>
        <a href="#" className="hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out rounded px-2"> Completed</a>

      </div>
      {/* grid */}
      <div className="flex gap-20 justify-between  container mx-auto mt-10 p-8">
         {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div card="rounded-xl shadow-lg">
            <div className=" flex flex-col mb-11 p-8 bg-slate-200 rounded-md  h-60 mx-2">
              <div className="rounded overflow-hidden w-8 h-8"> 
                <img src={pix1} className="h-80"/>
              </div>
              <h5 className="text-x md:text-sm font-medium mt-3 mb-8">
                Education: Education for locals in Ikorodu 
              </h5>

              <div className="text-x md:text-sm font-medium text-slate-500  flex justify-between">
              <p  className=" text-green-700">
                200,000 Recieved
              </p>
              <div> 450,000</div>
              </div>
              <div className=" text-x md:text-sm font-medium text-slate-500 mt-3 flex justify-between">
              <p>
                Donate: 102
              </p>
              <div> Completed</div>
              </div>
            </div>

          </div>
          
          <div card="rounded-xl shadow-lg ">
            <div className=" flex flex-col mb-11 p-8 bg-slate-200 rounded-md  h-60 mx-2">
              <div className="rounded overflow-hidden w-8 h-8"> 
                <img src={pix1} className="h-80"/>
              </div>
              <h5 className="text-x md:text-sm font-medium mt-3 mb-8">
                Education: Education for locals in Ikorodu 
              </h5>

              <div className="text-x md:text-sm font-medium text-slate-500  flex justify-between">
              <p  className=" text-green-700">
                200,000 Recieved
              </p>
              <div> 450,000</div>
              </div>
              <div className=" text-x md:text-sm font-medium text-slate-500 mt-3 flex justify-between">
              <p >
                Donate: 102
              </p>
              <div> Completed</div>
              </div>
            </div>

          </div>

          <div card="rounded-xl shadow-lg">
            <div className=" flex flex-col mb-11 p-8 bg-slate-200 rounded-md  h-60 mx-2">
              <div className="rounded overflow-hidden w-8 h-8"> 
                <img src={pix1} className="h-80"/>
              </div>
              <h5 className="text-x md:text-sm font-medium mt-3 mb-8">
                Education: Education for locals in Ikorodu 
              </h5>

              <div className="text-x md:text-sm font-medium text-slate-500  flex justify-between">
              <p  className=" text-green-700">
                200,000 Recieved
              </p>
              <div> 450,000</div>
              </div>
              <div className=" text-x md:text-sm font-medium text-slate-500 mt-3 flex justify-between">
              <p >
                Donate: 102
              </p>
              <div> 19days</div>
              </div>
            </div>

          </div>


        </div>

        
        

      </div>
    </DashboardLayout>
    
  );
};
function TaiwindCSSButton(props){
  return(
      <button className="bg-green-700 font-medium px-4 py-2 rounded text-white hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">
       
       {props.children}
      </button>
  )
}

export default CampaignsContents;