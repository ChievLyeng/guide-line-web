import StepCard from "./StepCard";

const GmailGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Using Gmail (Web Version)</h2>
      <StepCard
        step="1"
        description="Go to https://mail.google.com/ and sign in."
        image="/images/gmail-step1.png"
      />
      <StepCard
        step="2"
        description="Enter your Gmail address: chievlyeng@gmail.com and your password."
        image="/images/gmail-step2.png"
      />
      <StepCard
        step="3"
        description="After logging in, you'll be in your Gmail inbox."
        image="/images/gmail-step3.png"
      />
      <StepCard
        step="4"
        description="Click 'Compose' to write and send a new email."
        image="/images/gmail-step4.png"
      />
    </div>
  );
};

export default GmailGuide;
