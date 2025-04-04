"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Background from "../components/Background.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import moment from "moment";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import {
  getOneUser,
  getFollowers,
  getFollowings,
  getPosts,
  getAllUserName,
} from "../actions/useractions.js";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const [cheked, setChecked] = useState(false);

  useEffect(() => {
    document.title = params.pagename+" - CareerTrack";
    const checkUserExists = async () => {
      try {
        const list = await getAllUserName();
        if (!list.includes(params.pagename)) {
          router.push("/error/pagenotfound");
        } else {
          setChecked(true);
        }
      } catch (error) {
        console.error("Error fetching usernames:", error);
      }
    };
    checkUserExists();
  }, [params.pagename, router]);

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    if (!session) {
      router.push(
        `/login?callbackUrl=${encodeURIComponent(window.location.href)}`
      );
    } else {
      fetchUser(params.pagename);
      fetchFollowers(params.pagename);
      fetchFollowing(params.pagename);
      fetchPosts(params.pagename);
    }
  }, [session]);

  const fetchUser = (id) => {
    getOneUser(id)
      .then((res) => JSON.parse(res))
      .then((res) => setUser(res));
  };

  const fetchFollowers = (id) => {
    getFollowers(id)
      .then((res) => JSON.parse(res))
      .then((res) => setFollowers(res));
  };

  const fetchFollowing = (id) => {
    getFollowings(id)
      .then((res) => JSON.parse(res))
      .then((res) => setFollowing(res));
  };

  const fetchPosts = (id) => {
    getPosts(id)
      .then((res) => JSON.parse(res))
      .then((res) => setPosts(res));
  };

  const toPage = (username) => {
    router.push(`/${username}`);
  };

  if (!user) return;

  return (
    <div className="relative overflow-hidden text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />

        {cheked &&
          (!user ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <main className="max-w-4xl px-[3vw] mt-2 mx-auto  shadow-lg rounded-lg overflow-hidden">
              {/* Profile Section */}
              <div className="p-6 text-center">
                <div className="flex justify-center">
                  <Image
                    src={user.profile || "/default-avatar.png"}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full h-30 w-30 max-sm:h-15 max-sm:w-15  max-lg:h-20 max-lg:w-20 border-4 border-white shadow-lg"
                  />
                </div>
                <h2 className="text-4xl max-sm:text-xl font-bold mt-2">{user.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{user.bio}</p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 text-center border-gray-300">
                <div className="p-4 max-sm:p-2 bg-p4-trans sm:mx-3 max-sm:rounded-lg rounded-2xl border border-2 border-p1">
                  <p className="text-2xl max-sm:text-lg font-bold">{posts.length}</p>
                  <p className="text-lg max-sm:text-xs text-p1">Posts</p>
                </div>
                <div className="p-4 max-sm:p-2 bg-p4-trans sm:mx-3 max-sm:rounded-lg rounded-2xl border border-2 border-p1">
                  <p className="text-2xl max-sm:text-lg font-bold">{followers.length}</p>
                  <p className="text-lg max-sm:text-xs text-p1">Followers</p>
                </div>
                <div className="p-4 max-sm:p-2 bg-p4-trans sm:mx-3 max-sm:rounded-lg rounded-2xl border border-2 border-p1">
                  <p className="text-2xl max-sm:text-lg font-bold">{following.length}</p>
                  <p className="text-lg max-sm:text-xs text-p1">Following</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b text-xl  max-sm:text-sm">
                {["posts", "followers", "following"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 p-3 text-center font-semibold ${
                      activeTab === tab
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {activeTab === "posts" && (
                  <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {posts.map((post) => (
                      <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.1 }}
                        key={post._id}
                        className="bg-p4-trans text-white p-4 rounded-lg shadow"
                      >
                        <h3 className="text-xl  max-sm:text-lg font-semibold ">
                          {post.caption}
                        </h3>
                        <p className="text-sm mt-2 bg-p3 rounded-lg p-2">
                          {post.text}
                        </p>
                        <p className="text-xs mt-2">
                          {moment(post.createdAt).fromNow()}
                        </p>
                  </motion.div>
                    ))}
                      </div>
                )}

                {activeTab === "followers" && (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {followers.map((follower, index) => (
                      <li
                        key={index}
                        className="p-2 border rounded-lg shadow-sm flex items-center space-x-3 bg-p4-trans"
                      >
                        <Image
                        width={30}
                        height={30}
                          src={follower.profile}
                          alt={follower.name}
                          onClick={() => toPage(follower.username)}
                          className="w-15 h-15 max-sm:w-10 max-sm:h-10 border-p1 p-0.5 max-sm:border-2 border-4 border rounded-full object-cover"
                        />
                        <span className="text-lg  max-sm:text-sm font-medium">
                          {follower.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === "following" && (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {following.map((followed, index) => (
                      <li
                        key={index}
                        className="p-2 border rounded-lg shadow-sm flex items-center space-x-3 bg-p4-trans"
                      >
                        <Image
                        width={30}
                        height={30}
                          src={followed.profile}
                          alt={followed.name}
                          onClick={() => toPage(followed.username)}
                          className="w-15 h-15 max-sm:w-10 max-sm:h-10 border-p1 p-0.5 max-sm:border-2 border-4 border rounded-full object-cover"
                        />
                        <span className="text-lg  max-sm:text-sm font-medium">
                          {followed.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </main>
          ))}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
