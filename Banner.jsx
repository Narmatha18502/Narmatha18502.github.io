import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/willywonkamovies_ranked.jpg)`
      }}
    >
      <div className="text-white text-3xl text-center w-full bg-gray-900/60 p-4">Hero</div>
    </div>
  );
}

export default Banner;
