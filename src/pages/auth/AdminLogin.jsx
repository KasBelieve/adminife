import { AdminLoginImage, Logo } from "assets/images";
import { IconPasswordNotVisible, IconPasswordVisible } from "assets/svgs";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button";
import InputField from "shared/InputField";
// import ButtonAnimation from "shared/ButtonAnimation";

const AdminLogin = () => {
  const [viewPassword, setViewPassword] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // const body = {
      //   email: values.email,
      //   password: values.password,
      // };
      // dispatch(adminLogin(body)).then((data) => {
      //   if (data?.payload?.status === 200) {
      //     navigate("/admin/dashboard");
      //   }
      // });
      navigate("/admin/home");
    },
  });

  return (
    <section className="w-screen h-screen flex max-sm:flex-col-reverse">
      <div className="w-1/2 h-full max-sm:w-full px-16 max-md:px-6 py-12">
        <div className="">
          <div className="flex flex-col gap-3 mb-16">
            <div className="mb-2">
              <img src={Logo} alt="Login to get started" />
            </div>
            <h2 className="text-xxxxl text-black font-bold">Admin Login</h2>
            <p className="text-sm text-emperor text-opacity-70">
              Login to get started
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <div>
              <InputField
                type="email"
                name="email"
                label="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <div className="relative mb-8">
              <InputField
                type={`${viewPassword ? "password" : "text"}`}
                name="password"
                label="Password"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {!viewPassword ? (
                <IconPasswordVisible
                  onClick={() => setViewPassword(true)}
                  className="absolute bottom-3 right-4 cursor-pointer w-5 h-5"
                />
              ) : (
                <IconPasswordNotVisible
                  onClick={() => setViewPassword(false)}
                  className="absolute bottom-3 right-4 cursor-pointer w-5 h-5"
                />
              )}
            </div>
            <Button green type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="w-1/2 max-sm:hidden h-full">
        <img
          src={AdminLoginImage}
          className="w-full h-full object-cover"
          alt="Admin Login"
        />
      </div>
    </section>
  );
};

export default AdminLogin;
