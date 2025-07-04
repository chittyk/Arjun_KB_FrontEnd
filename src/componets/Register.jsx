import React from "react";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [cPassword, setCPassword] = useState("");
  const [cPasswordErr, setCPasswordErr] = useState("");

  const [otp, setOtp] = useState("");
  const [step, setstep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

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

  //handle Password Change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Reset error first
    setPasswordErr("");

    if (/\s/.test(value)) {
      setPasswordErr("Password should not contain spaces");
      return;
    }
    // Check length
    if (value.length < 6) {
      setPasswordErr("Password must be at least 6 characters long");
      return;
    }
  };

  //handle CPassword Change
  const handleCPasswordChange = (e) => {
    const value = e.target.value;
    setCPassword(value);

    if (password === value) {
      setCPasswordErr("");
    } else {
      setCPasswordErr("Conform password is Mismatch");
    }
  };

  const SendOtp = async () => {
    setMsg("");
    setErr("");
    if (emailErr || passwordErr || cPasswordErr) {
      setMsg("");
      setErr("Fill the form Correctly ");
    }
    try {
        setLoading(true)


        
    } catch (error) {
        
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 shadow-2xl w-full max-w-md border boarder-gray-200 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 ">
          Create Account
        </h2>
        {msg ? (
          <p className="text-center text-sm text-green-600 mb-4 transition duration-300">
            {err}
          </p>
        ) : err ? (
          <p className="text-center text-sm text-red-600 mb-4 transition duration-300">
            {err}
          </p>
        ) : null}

        {step === 1 && (
          <>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              {emailErr && (
                <p className="text-left text-sm text-red-600 m-0 transition duration-300">
                  {emailErr}
                </p>
              )}
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={email}
                onChange={handleEmailChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block mb-1 text-gray-600 text-sm font-medium"
              >
                Password
              </label>
              {passwordErr && (
                <p className="text-left text-sm text-red-600 m-0 transition duration-300">
                  {passwordErr}
                </p>
              )}
              <input
                type="text"
                className="w-full px-4 py-2  border  rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={password}
                onChange={handlePasswordChange}
                placeholder="*************"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-sm text-gray-600 font-medium mb-1"
              >
                Conform Password
              </label>
              {cPassword && (
                <p className="text-left text-sm text-red-600 m-0 transition duration-300">
                  {cPasswordErr}
                </p>
              )}
              <input
                type="text"
                className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={cPassword}
                onChange={handleCPasswordChange}
                placeholder="*************"
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg transition  hover:shadow-2xl hover:bg-green-700"
                onClick={SendOtp}
                disabled={loading}
              >
                {loading ? "Sending OTP" : "Send OTP"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
