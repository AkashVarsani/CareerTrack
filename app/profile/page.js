"use client";

import React, { useEffect } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Profile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent("/profile")}`);
    } else {
      router.push(`/${session.user.username}`);
    }
  }, [session, status, router]);

  return (
    <div className="relative text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main className="flex text-3xl flex-col items-center">
          Loading...
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
