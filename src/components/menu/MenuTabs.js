"use client";

import { useMemo, useState } from "react";
import MenuSides from "./MenuSides";
import MenuTabNav from "./MenuTabNav";
import MenuTabPanel from "./MenuTabPanel";
import { menuImgsSectionsArray } from "@/utils/constants";
import { useMenuImages } from "@/hooks/useMenuImages";
import "../../styles/menusides.css";

const DEFAULT_SECTION = menuImgsSectionsArray[1];

const MenuTabs = () => {
  const sections = useMemo(() => menuImgsSectionsArray, []);

  const [active, setActive] = useState(DEFAULT_SECTION);

  const { images, loading } = useMenuImages(active?.id);

  const showSides =
    active.name === "Grilled" || active.name === "Chef's Specials";

  return (
    <div className="pt-5">
      <MenuTabNav
        sections={sections}
        activeName={active.name}
        onSelect={setActive}
      />

      {showSides ? <MenuSides /> : null}

      <div className="tab-content" id="nav-tabContent">
        <MenuTabPanel images={images} loading={loading} />
      </div>
    </div>
  );
};

export default MenuTabs;
