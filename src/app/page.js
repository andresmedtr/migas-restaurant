import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import "./styles/index.css";
import Home from "./views/Home";
import Butchery from "./views/Butchery";
import Menu from "./views/Menu";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <Menu />
      <Butchery />
    </Layout>
  );
};

export default IndexPage;
