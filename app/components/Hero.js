// const Hero = () => {

//   return (
//     <div className="relative hero w-full h-[70%] flex justify-center py-10">
//       <div className="absolute top-0 z-[-2] h-full w-full bg-p4 bg-[radial-gradient(ellipse_100%_150%_at_50%_-20%,#748abd,#182336)]"></div>
//       <div className="relative box bg-p5 w-[80%] h-full rounded-4xl isolate overflow-hidden flex justify-center">
//         <svg
//           viewBox="0 0 1024 1024"
//           className="absolute -z-10  top-[130%] size-[80rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
//           aria-hidden="true"
//         >
//           <circle
//             cx="512"
//             cy="512"
//             r="512"
//             fill="url(#gradient)"
//             fillOpacity="0.7"
//           />
//           <defs>
//             <radialGradient id="gradient">
//               <stop stopColor="#6d87dd" />
//               <stop offset="1" stopColor="#7775D6" />
//             </radialGradient>
//           </defs>
//         </svg>

//         <div className="flex w-full h-full items-center">
//           <div className="w-1/2 h-full flex flex-col gap-12 justify-center px-14">
//             <h2 className="text-5xl font-extrabold">
//               Discover Your Passion, Build Your Future!
//             </h2>
//             <p className="text-xl font-medium">
//               Explore in-demand careers, get expert guidance, and acquire the
//               skills needed to thrive in your industry. Let’s shape your future
//               together!
//             </p>
//             <div className="flex gap-3 text-bold text-lg">
//               <div className="bg-white text-black px-4 py-2 rounded-xl">
//                 Explore Careers
//               </div>
//               <div className="bg-p5 text-white px-4 py-2 rounded-xl">
//                 Join Community
//               </div>
//             </div>
//           </div>
//           <div className="h-[80%] w-1 bg-p2 rounded-4xl"></div>
//           <div className="relative w-1/2 flex flex-col gap-6 justify-center items-center h-full logo">
//             <span className="text-6xl font-bold">
//               <span className="text-white">Career</span>
//               <span className="text-p2">Track</span>
//             </span>
//             <div className="text-xl">Your Pathway to Success Starts Here!</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




const Hero = () => {
  return (
      <div className="box w-full h-[500px] justify-center items-center px-[20%] py-[10%]">
        <div className="flex w-full h-full items-center">
          <div className="w-1/2 flex flex-col gap-8 justify-center px-10 text-left">
            <h2 className="text-4xl font-extrabold">
              Discover Your Passion, Build Your Future!
            </h2>
            <p className="text-lg font-medium">
              Explore in-demand careers, get expert guidance, and acquire the
              skills needed to thrive in your industry. Let’s shape your future
              together!
            </p>
            <div className="flex gap-3 text-bold text-lg">
              <div className="bg-white text-black px-4 py-2 rounded-xl text-center">
                Explore Careers
              </div>
              <div className="bg-p5 text-white px-4 py-2 rounded-xl text-center">
                Join Community
              </div>
            </div>
          </div>
          <div className="h-[400px] w-1 bg-p2 rounded-4xl"></div>
          <div className="relative w-1/2 flex flex-col gap-5 justify-center items-center h-full">
            <span className="text-5xl font-bold">
              <span className="text-white">Career</span>
              <span className="text-p2">Track</span>
            </span>
            <div className="text-lg text-center">Your Pathway to Success Starts Here!</div>
          </div>
        </div>
      </div>
  );
};


export default Hero;