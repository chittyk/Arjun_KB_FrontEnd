import React, { useState, useRef } from "react";
import MainNav from "../componets/main_nav";
import MainFooter from "../componets/MainFooter";
import Cropper from "react-easy-crop";

function Dashboard() {
  const [profilePic, setProfilePic] = useState(null);
  const [cropModal, setCropModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setCropModal(true);
    }
  };

  const handleSave = () => {
    // For now just set preview
    setProfilePic(selectedFile);
    setCropModal(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-900 text-gray-100 shadow-md">
        <MainNav />
      </div>


      {/* Main Content */}
      <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-gray-800">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            Edit Your Portfolio
          </h2>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <button
              onClick={() => inputRef.current.click()}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow"
            >
              Change Profile Picture
            </button>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Bio"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="GitHub Profile Link"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="LinkedIn Profile Link"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Crop Modal */}
      {cropModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-96">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Crop Your Picture
            </h3>
            <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <Cropper
                image={selectedFile}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setCropModal(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <MainFooter />
      </div>
    </>
  );
}

export default Dashboard;
