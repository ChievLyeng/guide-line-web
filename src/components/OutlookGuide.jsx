import StepCard from "./StepCard";

const OutlookGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Microsoft Outlook Setup</h2>
      <StepCard
        step="1"
        description="Open Microsoft Outlook. If it's your first time, it will prompt for email setup."
        image="/images/outlook-step1.png"
      />
      <StepCard
        step="2"
        description="Enter chievlyeng@gmail.com and click Connect."
        image="/images/outlook-step2.png"
      />
      <StepCard
        step="3"
        description="Enter your Gmail password when prompted and approve access."
        image="/images/outlook-step3.png"
      />
      <StepCard
        step="4"
        description="Click Done and Outlook will sync your email."
        image="/images/outlook-step4.png"
      />
    </div>
  );
};

export default OutlookGuide;
