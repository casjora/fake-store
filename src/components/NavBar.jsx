/* Estados y routing */
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full shadow-md flex gap-5 px-5 items-center justify-between border-4">
      <div className="flex gap-5">
        <div className="flex">
          <img className="w-5" src="/bag-blue.svg" alt="" />
          <Link
            className="text-lg font-semibold flex items-center justify-center"
            to={"/"}
          >
            LUXE<span className="hidden md:block">.</span>
          </Link>
        </div>

        <nav className="md:flex gap-5 hidden">
          <Link to={"/category/electronics"}>Electronics</Link>
          <Link to={"/category/jewelery"}>Jewelry</Link>
          <Link to={"/category/men"}>Men's</Link>
          <Link to={"/category/women"}>Women's</Link>
        </nav>
      </div>

      <div className="flex gap-5">
        <input
          className="bg-slate-200 px-3 hidden md:flex justify-center items-center rounded-md"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="🔎Search Products"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img className="w-5" src="/heart.svg" alt="wishlist" />
        <img className="w-5" src="/cart-large.svg" alt="wishlist" />
        <img className="w-5" src="/user-circle.svg" alt="wishlist" />
      </div>
    </div>
  );
}
