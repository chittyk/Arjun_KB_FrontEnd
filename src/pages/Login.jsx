import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../utils/api";

function Login() {
  const navigate = useNavigate();

  const [err, setErr] = useState(true);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");

  const [msg, setMsg] = useState("");
  const [step, setStep] = useState(1);
  const [loding, setLoading] = useState(false);

  //handleEmailChange
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setEmailErr("Email is required!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailErr("Please enter a valid email address!");
    } else if (/^[^a-zA-Z]/.test(value)) {
      setEmailErr("Email can't be start with special charaters or numbers");
    } else {
      setEmailErr("");
    }
    return;
  };

  //handleEmailChange
  const handlePasswordChage = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordErr("");
    if (/\s/.test(value)) {
      setPasswordErr("Password should not contain spaces");
      return;
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await api.post("/login", {
        email,
        password,
      });
      setMsg(res.data.msg);
      setErr(false);
      localStorage.setItem("token", res.data.token);
      // navigate("/dashboard");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      console.error("Login failed:", err);
      setErr(true);
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  //handleForgetPassword
  const handleForgetPassword = () => {
    setStep(2);
  };

  //handleDontHaveAccount
  const handleDontHaveAccount = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 shadow-2xl w-full max-w-md border rounded-2xl border-gray-200">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Login
        </h2>
        {msg && err === false && (
          <p className="text-center text-sm text-green-600 mb-4 transition duration-300">
            {msg}
          </p>
        )}
        {msg && err === true && (
          <p className="text-center text-sm text-red-600 mb-4 transition duration-300">
            {msg}
          </p>
        )}

        {step === 1 && (
          <>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block mb-1 text-sm text-gray-600 font-medium"
              >
                Email
              </label>
              {emailErr && (
                <p className="text-left text-sm text-red-600 mb-0 transition duration-300">
                  {emailErr}
                </p>
              )}
              <input
                type="email"
                className=" border w-full px-4 py-2  rounded-lg focus:ring-green-400 focus:ring-2 outline-0 "
                value={email}
                onChange={handleEmailChange}
                placeholder="example@xyz.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-gray-600 font-medium text-sm mb-1 block"
              >
                Password
              </label>
              {passwordErr && (
                <p className="text-red-600 text-sm transition mb-0 text-left duration-300">
                  {" "}
                  {passwordErr}{" "}
                </p>
              )}
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChage}
                className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-0"
              />
            </div>
            <button
              onClick={handleLogin}
              className="mb-4 bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 hover:rounded-full transition duration-300 cursor-pointer "
            >
              {loding ? "Loging..." : "Login"}
            </button>

            <div className="mb-4 w-full flex justify-around  ">
              <a
                onClick={handleForgetPassword}
                className="text-sm text-blue-700  hover:text-blue-800 font-medium hover:cursor-pointer"
              >
                Forget Password
              </a>
              <a
                onClick={handleDontHaveAccount}
                className="text-sm  text-blue-700 hover:text-blue-800 hover:cursor-pointer font-medium "
              >
                Don't have account
              </a>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-4">
              <div className="flex justify-center-safe w-full mb-4">
                <p className="text-center text-md">
                  We Send a OTP to{" "}
                  <p className="text-sm font-medium">{email}</p>
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className=" text-sm text-gray-600 font-medium py-1"
                >
                  Enter the OTP
                </label>
                {otpErr && (
                  <p className="text-sm text-red-600 font-medium px-2 mb-0">
                    {otpErr}
                  </p>
                )}
                 <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChage}
                className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-0"
              />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
