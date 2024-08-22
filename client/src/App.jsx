import FixedNavbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MovieSubscriptionDetails from "./Components/MovieSubscriptionDetails";
import FAQDetails from "./Components/FAQDetails";

import "./App.scss";

function App() {
  return (
    <>
      <div className="nav-main-container">
        <FixedNavbar />
        <Hero />
      </div>
      <MovieSubscriptionDetails />
      <FAQDetails />
    </>
  );
}

export default App;
