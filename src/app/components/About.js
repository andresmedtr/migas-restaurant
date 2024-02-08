import "../../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="aboutus">
      <motion.div
        data-aos="fade-down"
        className="scrollContainer pt-4"
        style={{
          height: "auto",
          fontSize: "1.5rem",
        }}>
        <div className="title container" id="about-us-section">
          <motion.h1
            className="borderBottom text-center "
            initial={{ opacity: 0, x: 0, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}>
            ABOUT US
          </motion.h1>
          <h4 className="titleDescription">
            Nestled in the heart of Miramar, Florida, since 2009,
            <strong>Miga&apos;s Steakhouse</strong> is a heaven for connoisseurs
            of top-quality steaks.
          </h4>
        </div>
        <div className="contentContainer">
          <div className="p-4">
            <p className="pAbout mb-5">
              Miga&apos;s Steakhouse has been synonymous with premium
              steaks—curated with meticulous care to honor the heritage of
              Argentinian grilling and innovation alike. Step into our culinary
              paradise, in Miramar and discover a diverse tapestry of epicurean
              delights. From our revered meat market featuring a spectrum of
              cuts to the artistry of hand-crafted Argentinian empanadas, our
              commitment to culinary precision shines through. Delight in our
              bakery&apos;s creations, where desserts become intricate works of
              art and bespoke cakes capture cherished moments. As advocates of
              homestyle cuisine, we cater to diverse palates, extending our
              offerings beyond steak enthusiasts, with a dense variety of wines.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
