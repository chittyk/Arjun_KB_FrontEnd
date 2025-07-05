import { useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [cPassword, setCPassword] = useState("");
  const [cPasswordErr, setCPasswordErr] = useState("");

  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [startTimer,setStartTimer] = useState(false)

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (timeLeft <= 0 || !startTimer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTimer,timeLeft]);

  // 🕒 Format time as MM:SS
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const navigate = useNavigate();
  const handleAlreadyHaveAccount = () => {
    navigate("/login");
  };

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

    if (cPassword === value) {
      setCPasswordErr("");
    } else {
      setCPasswordErr("Conform password is Mismatch");
    }

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

  const sendOtp = async () => {
    try {
      if (!email || !password) {
        setErr("Field can't be Empty !");
        return;
      }
      setLoading(true);
      const res = await api.post("/register", { email });
      setErr("");
      setMsg(res.data.msg);
      setStep(2);
      setStartTimer(true)
    } catch (err) {
      setErr(err.response.data.msg || "Failed to send OTP");
      setMsg("");
      console.log(msg);
    } finally {
      setLoading(false);
    }
  };
  const verifyOtp = async () => {
    try {
      setLoading(true);

      const res = await api.post("/verify", { email, password, otp });

      // 🔐 Log token from response
      console.log("JWT token from response:", res.data.token);

      // 💾 Save token
      localStorage.setItem("token", res.data.token);

      // 📦 Check if token saved in localStorage
      console.log("Token in localStorage:", localStorage.getItem("token"));

      setErr(null);
      setMsg("Registered! Redirecting...");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      setErr(err.response?.data?.error || "OTP verification failed");
    } finally {
      setLoading(false);
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
              {cPasswordErr && (
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
                onClick={sendOtp}
                disabled={loading}
              >
                {loading ? "Sending OTP" : "Send OTP"}
              </button>
            </div>
            <div className="mb-4 w-full flex justify-end">
              <button
                onClick={handleAlreadyHaveAccount}
                className="text-blue-600 text-sm font-medium hover:cursor-pointer hover:text-blue-800 transition duration-300 bg-transparent border-none p-0"
              >
                Already have account?
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Enter OTP
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit code"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Time remaining:{" "}
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </p>
            {timeLeft <= 0 && (
              <p className="text-red-500 text-sm mt-2">
                OTP expired. Please resend.
              </p>
            )}
            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify & Register"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
