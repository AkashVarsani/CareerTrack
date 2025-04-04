"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {
  getAllUser,
  getFollowingList,
  followToUser,
} from "../actions/useractions";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NetworkPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    document.title = "Network - CareerTrack";
    if (!session) {
      router.push(
        `/login?callbackUrl=${encodeURIComponent(window.location.href)}`
      );
    } else {
      fetchUsers();
      fetchFollowing();
    }
  }, [session]);

  const fetchUsers = async () => {
    const data = await getAllUser().then((res) => JSON.parse(res));
    setUsers(data.filter((user) => user.username !== session.user.username));
  };

  const fetchFollowing = () => {
    if (session)
      getFollowingList(session.user.username)
        .then((res) => JSON.parse(res))
        .then((data) => setFollowingList(data));
  };

  const follow = (toUser) => {
    if (session)
      followToUser(session.user.username, toUser)
        .then((res) => JSON.parse(res))
        .then((data) => setFollowingList(data));
  };

  return (
    <div className="relative  overflow-hidden text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="container mx-auto p-6">
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl text-center font-bold text-p0 mt-[3vh] mb-3"
            >
              Network Smarter, Succeed Faster!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold w-[50vw] h-1 bg-p0 box-border text-p0 rounded-xl mb-1"
            ></motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold w-[25vw] h-1 bg-p0 box-border text-p0 rounded-xl"
            ></motion.p>
            </div>
            <div className="grid mt-8 md:grid-cols-2 gap-6 max-sm:gap-2">
              {users.map((user) => (
                <div
                  key={user.username}
                  className="p-4 max-sm:p-2 border bg-p5-trans rounded-lg shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4 max-sm:space-x-1">
                    <img
                    onClick={()=> router.push(`/${user.username}`)}
                      src={user.profile}
                      alt={user.name}
                      className="w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg max-lg:text-sm max-sm:text-xs font-semibold">{user.name}</h2>
                      <p className="text-gray-500 max-lg:text-sm max-sm:text-xs ">@{user.username}</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      follow(user.username)
                    }
                    className={`px-4 py-2 max-sm:p-1 text-sm max-sm:text-xs  font-medium rounded-lg  text-black w-30 max-sm:w-18
                ${
                  followingList.includes(user.username)
                    ? "bg-p2 "
                    : "bg-yellow-400"
                }
              `}
                  >
                    {followingList.includes(user.username)
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default NetworkPage;
