"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function MenuTabPanel({ images, loading }) {
  if (loading) {
    return <div className="w-100 mx-auto p-4 text-center">Loading…</div>;
  }

  return (
    <div className="w-100 mx-auto p-2 text-center">
      {images.map((file) => (
        <div key={file.url} className="mx-auto col-lg-3 d-inline-block">
          <Zoom>
            <Image
              src={file.url}
              className="menuImages"
              width={450}
              height={600}
              alt={file.title}
              style={{ cursor: "zoom-in", width: "100%", height: "auto" }}
            />
          </Zoom>
        </div>
      ))}
    </div>
  );
}
