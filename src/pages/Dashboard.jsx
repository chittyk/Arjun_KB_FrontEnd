import React from "react";
import { Link } from "react-router-dom";
import MainNav from "../componets/main_nav";
import MainFooter from "../componets/MainFooter";

function Dashboard() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-900 text-gray-100 shadow-md">
        <MainNav />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome back, Arjun 🚀</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Build, manage, and showcase your professional portfolio with ease. 
          Keep growing and let your work shine ✨
        </p>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-8 bg-gray-800">
        <h2 className="text-2xl font-semibold text-white mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            { title: "Edit Profile", icon: "👤", link: "/edit-profile" },
            { title: "Upload Resume", icon: "📄", link: "/upload-resume" },
            { title: "Add Project", icon: "💻", link: "/add-project" },
            { title: "Customize Theme", icon: "🎨", link: "/customize-theme" },
          ].map((action, index) => (
            <Link
              to={action.link}
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer text-center transition block"
            >
              <div className="text-4xl mb-3">{action.icon}</div>
              <h3 className="text-lg font-medium text-white">{action.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-8 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Portfolios", count: "3" },
            { title: "Projects", count: "12" },
            { title: "Profile Views", count: "1.2k" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">
                {stat.count}
              </h3>
              <p className="text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Portfolios */}
      <section className="py-12 px-8 bg-gray-800">
        <h2 className="text-2xl font-semibold text-white mb-6">Recent Portfolios</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition"
            >
              <h3 className="text-lg font-bold text-indigo-400 mb-2">
                Portfolio {item}
              </h3>
              <p className="text-gray-300">
                A short description about portfolio {item}. Click to view details.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <MainFooter />
      </div>
    </>
  );
}

export default Dashboard;
