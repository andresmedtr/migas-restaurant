import { motion } from "framer-motion";
import PlatesCarousel from "./PlatesCarousel";

const PopularPlates = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "3rem",
        }}>
        <motion.h1
          style={{
            paddingTop: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
          className="borderBottom w-100 mx-auto"
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}>
          HOUSE SIGNATURES
        </motion.h1>
      </div>
      <PlatesCarousel />
    </div>
  );
};

export default PopularPlates;
