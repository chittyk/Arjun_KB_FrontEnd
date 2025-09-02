import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../utils/api";
import MainNav from "../componets/main_nav";
import MainFooter from "../componets/MainFooter";
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

  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  

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
      setOtpErr(res.data.msg);
      setErr(false);
      localStorage.setItem("token", res.data.token);
      // navigate("/dashboard");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      console.error("Login failed:", err);
      setLoading(false)
      setErr(true);
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  //handleForgetPassword
  const handleForgetPassword = async () => {
    try {
      const res = await api.post("/forgetPassword", { email });
      console.log(res)
      // setMsg(res?.data?.msg || "Otp send to ", email);
      setErr(false);
      setStep(2);
      setTimeLeft(180)

    } catch (error) {
      console.log(error)
      setErr(true);
      setMsg(error.response?.data?.error || "Failed to send Otp");
    }
  };

  //handleDontHaveAccount
  const handleDontHaveAccount = () => {
    navigate("/register");
  };
  



  useEffect(() => {
      

      if(timeLeft <= 0) {
        setStep(1)
      return
      }
  
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, [timeLeft]);
  
    // 🕒 Format time as MM:SS
    const formatTime = (seconds) => {
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      return `${m}:${s}`;
    };

  // handleOtpChange
  const handleOtpChange = async (e) => {
    const value = e.target.value;
    setOtp(value);

    if (value.length === 6) {
      try {
        const newPassword = password;
        const otp=value
        const res = await api.post("/resetPassword", { email, newPassword, otp });
        setMsg(res?.data?.msg || "OTP Verify successfully");
        setErr(false);
        setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
      } catch (error) {
        // alert(error.response?.data?.error)
        setErr(true);
        setOtpErr(error.response?.data?.error || "Invalid OTP ");
      }
    }

  };

  return (
    
    <>
    
    <div className="min-h-screen  flex items-center justify-center p-4">
      
      <div className="bg-blue p-8 shadow-2xl shadow-blue-900  w-full  max-w-md border rounded-2xl border-4 border-blue-800">
        <h2 className="text-center text-3xl font-semibold text-blue-400 mb-6">
          Login
        </h2>
        {msg && err === false && (
          <p className="text-center text-sm text-blue-600 mb-4 transition duration-300">
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
                className="block mb-1 text-sm text-blue-600 font-medium"
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
                className="border placeholder-gray-400 text-white w-full px-4 py-2 rounded-lg focus:ring-2 border-blue-400 focus:ring-blue-400 outline-0"
                value={email}
                onChange={handleEmailChange}
                placeholder="example@xyz.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-blue-600 font-medium text-sm mb-1 block"
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
                className="border placeholder-gray-400 text-white w-full px-4 py-2 rounded-lg focus:ring-2 border-blue-400 focus:ring-blue-400 outline-0"
              />
            </div>
            <button
              onClick={handleLogin}
              className="mb-4 bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 hover:rounded-full transition duration-300 cursor-pointer "
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
                  className=" text-sm text-blue-600 font-medium py-1"
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
                  value={otp}
                  onChange={handleOtpChange}
                  className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-0"
                />
                <p className="text-xs text-blue-500 mt-1">
              Time remaining:{" "}
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </p>
            {timeLeft <= 0 && (
              <p className="text-red-500 text-sm mt-2">
                OTP expired. Please resend.
              </p>
            )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    
    </>
  );
}

export default Login;
