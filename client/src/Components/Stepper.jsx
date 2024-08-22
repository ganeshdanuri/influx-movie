/* eslint-disable react/prop-types */
const Stepper = ({ items, title }) => {
  return (
    <div className="stepper-container">
      <h2 className="stepper-title">{title}</h2>
      <div className="stepper-items">
        {items.map((step, index) => (
          <div key={index} className="stepper-item">
            <div className="stepper-content">
              <div className="d-flex">
                <div className="stepper-number">
                  {index + 1}
                  {index !== items.length - 1 && (
                    <div className="stepper-line"></div>
                  )}
                </div>
              </div>
              <p className="stepper-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
