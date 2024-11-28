import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page not found",
};
export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center mt-32 gap-5">
      <h2 className="font-bold text-2xl">Page Not Found</h2>
      <p>Could not find requested resources</p>
      <Link href="/">Return Home</Link>
      <Image
        src="/images/not-found-1024x1024.jpg"
        width={300}
        height={300}
        alt=""
        className="m-0 rounded-xl "
        sizes="300px"
        priority={true}
        title="Page not Found"
      />
    </div>
  );
}
