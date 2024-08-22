import { faqData } from "../Utils/constants";

const FAQDetails = () => {
  return (
    <div className="faq-container d-flex flex-column">
      {faqData.map((eachData, i) => {
        return (
          <>
            <details name="reqs" key={i}>
              <summary>{eachData.summary}</summary>
              <p className="pt-2">{eachData.discription1}</p>
              <p>{eachData.discription2}</p>
            </details>
            {i !== faqData.length - 1 && <hr />}
          </>
        );
      })}
    </div>
  );
};

export default FAQDetails;
