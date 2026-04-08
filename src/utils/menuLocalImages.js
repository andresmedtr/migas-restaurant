import { menuImgsSectionsArray } from "@/utils/constants";

const EXT = "svg"; // change if needed
const BASE_PATH = "/assets/menuImg";

export const localMenuImagesBySectionId = Object.fromEntries(
  menuImgsSectionsArray.map((section) => [
    section.id,
    section.file.map((fileName) => ({
      title: section.name,
      url: `${BASE_PATH}/${fileName}.${EXT}`,
    })),
  ])
);
