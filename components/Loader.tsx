import React from 'react'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white opacity-50 z-50 flex items-center flex-col gap-12 justify-center">
          <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin"></div>
          <p className="text-5xl">Loading...</p>
    </div>
  );
}

export default Loader