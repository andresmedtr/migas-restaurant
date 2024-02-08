import PromotionsCarousel from "./PromotionsCarousel";
import menuData from "@/menus/menuData.json";

const Promotions = () => {
  return (
    <div data-aos="fade-up" className="mx-auto">
      <div
        className="mt-5 container "
        style={{
          padding: "1rem",
          marginBottom: "8%",
          display: "flex",
          justifyContent: "center",
        }}>
        <h1 className="w-100 borderBottom text-center mx-auto">
          DAILY SPECIALS
        </h1>
      </div>
      <PromotionsCarousel slide={menuData} />
    </div>
  );
};

export default Promotions;
