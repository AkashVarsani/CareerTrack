"use client";

import { React, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  

  return menu? <div className="px-[8%] py-3 bg-p5 text-white">
     <button className="xl:hidden max-lg:block mb-3">
          <Image
          width={30}
          height={30}
          onClick={() => setMenu(false)}
          className="invert" src="/menu.svg" alt="" />
        </button>
      <ul className="menus flex flex-col gap-[2vw] text-lg max-xl:text-sm">
        <MenuList />
      </ul>
  </div>:(
    <div className="flex justify-between items-center h-16 px-[8%] bg-p5 text-white">
      <div className="relative flex items-center gap-2">
        <button className="xl:hidden max-lg:block">
        <Image
          width={30}
          height={30}
          onClick={() => setMenu(true)}
          className="invert" src="/menu.svg" alt="" />
        </button>
        <Link href="/" className="logo text-2xl max-xl:text-xl font-bold">
          <span className="text-white">Career</span>
          <span className="text-p2">Track</span>
        </Link>
      </div>

      <ul className="max-xl:hidden menus flex gap-[2vw] text-lg max-xl:text-sm">
        <MenuList />
      </ul>

      {session?.user ? (
        <div className="relative flex items-center gap-4 group">
          <p className="text-lg max-xl:hidden font-semibold">
            {session.user.name}
          </p>
          <button>
            <Image
              src={session.user.profile || "/default-avatar.png"} // Fallback image
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </button>

          <div className="absolute group-focus-within:block hidden right-0 top-13 w-32 bg-p4 shadow-md rounded-lg border">
            <button
              onClick={() => signOut()}
              className="block w-full text-left px-4 py-2 hover:bg-p2-trans"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <Link
          href="/login"
          className="text-xl max-sm:text-sm hover:underline underline-offset-8 decoration-sky-600 decoration-4"
        >
          LogIn
        </Link>
      )}
    </div>
  );
};

const MenuList = () => {
  return (
    <>
      <Link
        href="/"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        Home
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>
      <Link
        href="/assessment"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        Assessment
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>

      <Link
        href="/tracks"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        Tracks
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>

      <Link
        href="/upskill"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        UpSkill
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>

      <Link
        href="/network"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        Network
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>

      <Link
        href="/about"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        About Us
      </Link>
      <div className="xl:hidden bg-p1 h-[2px] rounded-xl"></div>

      <Link
        href="/profile"
        className="xl:hover:underline underline-offset-8 decoration-sky-600 decoration-4"
      >
        Profile
      </Link>

    </>
  );
};

export default Navbar;
