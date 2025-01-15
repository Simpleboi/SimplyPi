import { Header } from "../components/header";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Main } from "./courses";

export const Home = () => {
  return (
    <main>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </main>
  );
};
