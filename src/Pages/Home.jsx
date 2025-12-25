import landingImage from "../assets/erik-mclean-bGWVhFY1gH0-unsplash.jpg";
import HomeContent from "../components/HomeContent";


const Home = () => {
  return (
    <div
      className="h-screen flex"
      style={{
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
      }}
    >
      <HomeContent />
    </div>
  );
};

export default Home;
