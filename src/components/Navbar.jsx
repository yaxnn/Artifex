import React from "react";
import { assets } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, WandSparkles } from "lucide-react";

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Artifex Logo"
          className="w-28 sm:w-30 lg:w-40"
        />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <WandSparkles className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credit left : 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi ,Yaseen</p>
            <div className="relative group">
              <UserRound className="w-10 drop-shadow" />
              <div
                className="absolute hidden group-hover:block
              top-0 right-0 z-10 text-black rounded pt-12 "
              >
                <ul className="list-none m-0 p-2 bg-white rounded-md  text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy ")} className="cursor-pointer">
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
