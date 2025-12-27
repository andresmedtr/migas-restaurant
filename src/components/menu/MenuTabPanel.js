"use client";

import Image from "next/image";

export default function MenuTabPanel({ images, loading }) {
  if (loading) {
    return <div className="w-100 mx-auto p-4 text-center">Loading…</div>;
  }

  return (
    <div className="w-100 mx-auto p-2 text-center">
      {images.map((file) => (
        <Image
          key={file.url}
          src={file.url}
          className="menuImages mx-auto p-3 col-lg-3"
          width={450}
          height={600}
          alt={file.title}
        />
      ))}
    </div>
  );
}
