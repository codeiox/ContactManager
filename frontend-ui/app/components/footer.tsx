import React from "react";

const footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Sagar Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default footer;
