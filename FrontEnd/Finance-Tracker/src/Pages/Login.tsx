import React, { useState } from "react";

import Buttonn from "../Component/Button";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import { useTokenStore } from "@/store/tokenstore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // type FormFields = {
  //   email: string;
  //   password: string;
  // };

  // const {register} = useForm<FormFields>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [token, setToken] = useState([]);

  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const baseurl: string = import.meta.env.VITE_BACKEND_URL;
    console.log("baseurl", baseurl);
    console.log("link:", `${baseurl}/api/Auth/login`);

    try {
      const response = await fetch(`${baseurl}/api/User/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        setError("Invalid username or password");
        return;
      }

      const data = await response.json();
      // console.log("data", data);
      const token = data;

      // Save JWT token
      // setToken(token);
      setToken(token);
      console.log("Token:", token);

      if (token) {
        toast("Login Successfull", {
          description: "",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        navigate("/");
      } else {
        toast("Failed");
      }
    } catch (err) {
      console.error(err);
      setError(error);
    }
  };

  console.log(token);

  return (
    <div className="bg-white h-screen flex items-center justify-center font-light text-[14px]  ">
      <Toaster />
      <div className=" flex flex-col p-4 gap-10 w-90">
        <div className="font-bold  text-green-400 text-2xl mb-7 text-center">
          FinanceTracker.IO
        </div>
        <form onSubmit={handleSubmit} autoComplete="">
          <div className="flex flex-col gap-3 bg-">
            <div className="relative">
              <input
                type="text"
                name=""
                id="user"
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
                className="border-2  border-black bg-white  rounded-[0.2rem] w-full peer  h-12 p-1"
              />

              <label
                htmlFor="user"
                className="absolute left-1  transition-all duration-150 ease-in-out -top-3 peer-focus:-top-3 peer-placeholder-shown:top-4 text-[15px] px-2 rounded-md   bg-white "
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                name=""
                id="pass"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                className="border-2  border-black bg-white  rounded-[0.2rem] w-full peer  h-12 p-1"
              />

              <label
                htmlFor="pass"
                className="absolute left-1  transition-all duration-150 ease-in-out -top-3 peer-focus:-top-3 peer-placeholder-shown:top-4 text-[15px] px-2 rounded-md bg-white "
              >
                Password
              </label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Remember Me</label>
            </div>
            <p className="text-center m-4">Forgot Password?</p>
            <div className="flex justify-center  shadow-2xs  hover:scale-103 h-10  ">
              {/* <button className="bg-blue-500 hover:bg-blue-600  hover:cursor-pointer w-full hover:scale-103">
                  SUBMIT
                </button> */}
              <Buttonn type="submit" children="SUBMIT" variant="primary" />
            </div>
          </div>
        </form>
        <div className="">
          <hr />

          <hr />
        </div>

        <Button variant="secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            <title>Google-color</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  ></path>
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
