import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="notfound">
      <h1>
        <span>4O4 |</span> page not found
      </h1>
      <div className="links">
        <Link href={"/"}>Go To HomePage</Link>
      </div>
    </div>
  );
};

export default page;
