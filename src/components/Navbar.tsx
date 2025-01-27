"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { div } from "motion/react-client";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
     




     
        <Menu setActive={setActive}>
         <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="HOME">
            
            </MenuItem>
            </Link>

          <MenuItem setActive={setActive} active={active} item="COURSE">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <HoveredLink
                title="React Master Kit"
                href="https://reactmasterkit.com"
                src="https://assets.aceternity.com/demos/reactmasterkit.webp"
                description="Production ready React components for your next project" />
              
              
            
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="ROADMAP"
          ></MenuItem>
          {/* <Link href={"/contact"}> */}
            <MenuItem setActive={setActive} active={active} item="CONTACT US">
            
            </MenuItem>
            {/* </Link> */}
        </Menu>
    
    </div>
  );
}


export default Navbar;