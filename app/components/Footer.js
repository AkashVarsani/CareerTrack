"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5 justify-center items-center h-full">
          <span className="text-5xl font-bold">
            <span className="text-white">Career</span>
            <span className="text-p2">Track</span>
          </span>
          <div className="text-lg text-center">
            Your trusted platform for career guidance, skill-building, and
            professional networking.
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4"
                >
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  Tracks
                </Link>
              </li>
              <li>
                <Link href="/upskill" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  UpSkill
                </Link>
              </li>
              <li>
                <Link href="/network" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  Network
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition hover:underline underline-offset-8 decoration-sky-600 decoration-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </Link>
            </div>
            <p className="mt-4 text-sm">
              Email:{" "}
              <a
                href="mailto:support@careertrack.com"
                className="text-blue-400 hover:underline"
              >
                support@careertrack.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} CareerTrack. All Rights Reserved.
      </div>
    </footer>
  );
}
