"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path == href;
  return (
    <Link className={`${isActive ? "text-primary font-bold" : ""}`} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
