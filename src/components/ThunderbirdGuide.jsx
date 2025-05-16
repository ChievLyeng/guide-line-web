import StepCard from "./StepCard";

const ThunderbirdGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Mozilla Thunderbird Setup</h2>
      <StepCard
        step="1"
        description="Go to the official Thunderbird website: https://www.thunderbird.net/"
        image="/images/thunderbird-step1.png"
      />
      <StepCard
        step="2"
        description="Download and install Thunderbird for your OS."
        image="/images/thunderbird-step2.png"
      />
      <StepCard
        step="3"
        description="Open Thunderbird and choose 'Set up an Existing Email Account'."
        image="/images/thunderbird-step3.png"
      />
      <StepCard
        step="4"
        description="Enter your name, email (chievlyeng@gmail.com), and password."
        image="/images/thunderbird-step4.png"
      />
    </div>
  );
};

export default ThunderbirdGuide;
