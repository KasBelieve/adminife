import { Logo } from "assets/images";
import { IconAddCircle, IconLogout } from "assets/svgs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { sidebarContent } from "utils/data";

const Sidebar = ({ setToggle, toggle }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col w-0 ${
        toggle && "w-[280px]"
      } md:w-[280px] mb-8 justify-between gap-2 border-r border-dawnPink transition-all duration-700 delay-100 ease-in-out`}
    >
      <div className="min-h-[100px] max-md:min-h-[80px] flex justify-center px-4 border-b border-dawnPink">
        <Link to={"/admin/home"} className="flex items-center gap-4">
          <div className="w-[55px] h-[55px]">
            <img src={Logo} className="w-full h-full" alt="Admin dashboard" />
          </div>
          <p className="text-xl font-medium max-md:hidden">Dashboard</p>
        </Link>
      </div>
      <div className="overflow-y-auto max-md:h-[calc(100vh-162px)] h-[calc(100vh-138px)]">
        {sidebarContent.map((content, index) => (
          <div key={index} className="my-8">
            <NavLink
              to={content.path}
              className={({ isActive }) =>
                `${
                  isActive &&
                  content.path &&
                  "bg-blackHaze border-r-2 !text-eden border-eden"
                } font-medium w-full flex gap-4 text-gunsmoke whitespace-nowrap justify-start items-center p-4`
              }
            >
              <span>{content.icon}</span>
              <p className="text-[14px]">{content.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
      <div>
        <div className="p-4 cursor-pointer flex justify-start gap-4">
          <IconAddCircle />
          <p className="">Add Admin</p>
        </div>
      </div>
      <div
        onClick={() => {
          // dispatch(logout());
          navigate("/");
        }}
      >
        <div className="p-4 cursor-pointer flex justify-start gap-4 hover:text-red-500  hover:border-red-500">
          <IconLogout />
          <p className="">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
