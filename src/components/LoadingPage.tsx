import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-t-transparent border-[#1ED760] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
