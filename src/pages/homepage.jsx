import { Header } from "../components/home/header";
import { Posts } from "../components/home/posts/posts";
import { Share } from "../components/home/share";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  return (
    <section className="flex">
      <Navbar />
      <div className="grow">
        <Header />
        <Share />
        <Posts />
      </div>
    </section>
  );
};
export default HomePage;
