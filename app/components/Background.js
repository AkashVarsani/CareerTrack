import React from "react";

const Background = () => {
  return (
    <div className="absolute -z-4 bg-p5 isolate h-screen w-screen flex flex-col items-center">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute -z-1 top-0 size-[100rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#6d87dd" />
            <stop offset="1" stopColor="#7775D6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Background;
