import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import SuccessStories from "./components/Success";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function Home() {
  return (
    <div className="relative isolate h-screen w-screen overflow-hidden flex flex-col items-center">
    <Background />
      <div className="relative overflow-y-scroll overflow-x-hidden font-poppins no-scrollbar h-screen w-screen text-white">
        <Navbar />
        <Hero />
        <SuccessStories />
        <Featured />
        <div className="h-1 bg-p2 mx-[10%] rounded-full"></div>
        <NewsLetter/>
        <Footer />
      </div>
    </div>
  );
}

export var metadata = {
  title: "Home - CareerTrack",
};