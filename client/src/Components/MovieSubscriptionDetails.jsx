/* eslint-disable react/prop-types */
import { Button, Stack } from "react-bootstrap";
import { movieSubscriptionBenifits, steps } from "../Utils/constants";
import Stepper from "./Stepper";

const HeroHeader = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={3} className="stars-container">
        <img src="./Assets/teenyicons_star-solid.svg" alt="star" />
        <img src="./Assets/teenyicons_star-solid-2.svg" alt="star" />
        <img src="./Assets/teenyicons_star-solid-1.svg" alt="star" />
      </Stack>
      <h1 className="mt-3 title">Reel Deal Monthly Movies</h1>
      <p className="description">
        Your flexible monthly membership to the latest movies
      </p>
      <hr />
    </div>
  );
};

const ActionButtons = () => {
  return (
    <div className="action-buttons" style={{ width: "100%" }}>
      <Button
        variant="danger"
        className="get-started-button"
        style={{ width: "200px", padding: "10px", marginRight: "20px" }}
      >
        Get Started
      </Button>
      <a href="#" className="text-decoration-underline ms-2">
        Learn more
      </a>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <HeroHeader />
      <Stepper items={steps} title="What is MVP Subscription?" />
      <ActionButtons />
    </div>
  );
};

const BenefitItem = ({ eachBenift }) => {
  const { text, icon, description } = eachBenift;
  return (
    <li
      key={text}
      className="d-flex flex-column justify-content-between p-4 m-1 custom-list-item"
    >
      <img
        src={`./Assets/${icon}.svg`}
        alt={icon}
        className="mb-3"
        height={50}
        width={40}
      />
      <div>
        <h1 className="custom-heading">{text}</h1>
        <p className="custom-description">{description}</p>
      </div>
    </li>
  );
};

const LegalNotice = () => {
  return (
    <ol className="m-2 order-list">
      <p>
        1. Excludes IMAX and DBOX formats. No fees apply to Passport Credits
        only. Other fees apply to fullapriced tickets.
      </p>
      <p>2. Excludes alconolic beverares</p>
    </ol>
  );
};

const SubscriptionBenefits = () => {
  return (
    <div className="d-flex flex-column">
      <ul className="benifits-list-container">
        {movieSubscriptionBenifits.map((eachBenift) => {
          return <BenefitItem key={eachBenift.text} eachBenift={eachBenift} />;
        })}
      </ul>
      <LegalNotice />
    </div>
  );
};

const MovieSubscriptionDetails = () => {
  return (
    <div className="details-container text-light">
      <HeroSection />
      <SubscriptionBenefits />
    </div>
  );
};

export default MovieSubscriptionDetails;
