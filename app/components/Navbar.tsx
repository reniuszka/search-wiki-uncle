import React from "react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-green-950 grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiUncle!</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
