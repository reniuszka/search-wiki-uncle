"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  //added async and no erro with hydration :)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // back to the empty the input
    setSearch("");
    //takess us to the url with the search word -> dynamic page
    router.push(`/${search}/`);
  };
  return (
    // <form TO CHECK THE TYPE OF EVENT
    //   onSubmit={e =>handleSubmit}
    //   className="w-50 flex justify-center md:justify-between"
    // >
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search in WikiUncle"
        className="bg-white text-green-900 p-2 w-80 text-xl rounded-xl"
      />
      <button className="p-4 text-xl rounded-xl bg-green-950 ml-2 font-bold">
        Go →
      </button>
    </form>
  );
};

export default Search;
