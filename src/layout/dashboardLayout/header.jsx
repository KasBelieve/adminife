import { ActiveUser } from "assets/images";
import { IconClose, IconMenu, IconSearch } from "assets/svgs";
import React from "react";
import InputField from "shared/InputField";

const Header = ({ setToggle, toggle }) => {
  return (
    <div className="w-full h-[100px] max-md:h-[80px] bg-white flex justify-between items-center px-12 max-md:px-6 py-6">
      <div className="max-md:hidden relative max-[1100px]:w-3/5">
        <InputField
          placeholder="Search"
          className="!h-[68px] !pl-14 !rounded-[100px] max-[1100px]:!w-full !w-[489px] !border-none !bg-blackHaze"
        />
        <IconSearch className="absolute top-6 left-4 w-5 h-5" />
      </div>
      <div onClick={() => setToggle(!toggle)} className="min-[768px]:hidden">
        {toggle ? <IconClose /> : <IconMenu />}
      </div>
      <div className="flex justify-center items-center gap-2">
        <p className="text-lg max-[880px]:text-xs">Admin Bimpe</p>
        <div className="w-[60px] h-[60px] max-md:w-[35px] max-md:h-[35px] rounded-full">
          <img src={ActiveUser} alt="Active User" />
        </div>
      </div>
    </div>
  );
};

export default Header;
