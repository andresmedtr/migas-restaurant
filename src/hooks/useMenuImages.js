// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { createClient } from "contentful";

// export function useMenuImages(tagId) {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const retryTimeout = useRef(null);
//   const cacheRef = useRef({});

//   const client = useMemo(() => {
//     return createClient({
//       space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//       accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
//     });
//   }, []);

//   useEffect(() => {
//     if (!tagId) return;

//     // serve from cache (prevents re-fetching when switching back to a tab)
//     if (cacheRef.current[tagId]) {
//       setImages(cacheRef.current[tagId]);
//       return;
//     }

//     let cancelled = false;

//     const fetchMenuImages = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await client.getAssets({
//           "metadata.tags.sys.id[in]": tagId,
//           order: "-sys.createdAt",
//         });

//         const nextImages = response.items.map((item) => ({
//           title: item.fields?.title || "Menu",
//           url: `https:${item.fields?.file?.url}`,
//         }));

//         if (!cancelled) {
//           cacheRef.current[tagId] = nextImages;
//           setImages(nextImages);
//         }
//       } catch (err) {
//         if (!cancelled) setError(err);

//         // don’t stack retries forever
//         if (!cancelled) {
//           if (retryTimeout.current) window.clearTimeout(retryTimeout.current);
//           retryTimeout.current = window.setTimeout(fetchMenuImages, 3000);
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchMenuImages();

//     return () => {
//       cancelled = true;
//       if (retryTimeout.current) window.clearTimeout(retryTimeout.current);
//     };
//   }, [tagId, client]);

//   return { images, loading, error };
// }

"use client";
"use client";

import { useEffect, useRef, useState } from "react";
import { localMenuImagesBySectionId } from "@/utils/menuLocalImages";

export function useMenuImages(sectionId) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const cacheRef = useRef({});

  useEffect(() => {
    if (!sectionId) return;

    // Serve from cache
    if (cacheRef.current[sectionId]) {
      setImages(cacheRef.current[sectionId]);
      return;
    }

    setLoading(true);
    setError(null);

    const nextImages = localMenuImagesBySectionId[sectionId] || [];

    cacheRef.current[sectionId] = nextImages;
    setImages(nextImages);
    setLoading(false);
  }, [sectionId]);

  return { images, loading, error };
}
