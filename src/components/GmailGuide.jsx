import StepCard from "./StepCard";
import Login from "../img/gmail/login.png";
import Password from "../img/gmail/password.png";
import Done from "../img/gmail/done.png";

const GmailGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Using Gmail (Web Version)</h2>
      <StepCard
        step="1"
        description="Go to https://mail.google.com and you see the form if you already have gmail account you can login by enter you account if not you have to sign up."
        image={Login}
      />
      <StepCard
        step="2"
        description="After entered you gmail account you have to enter you password then click next button."
        image={Password}
      />
      <StepCard
        step="3"
        description="So after logged in you gmail and password now you can use gmail for email sender."
        image={Done}
      />
    </div>
  );
};

export default GmailGuide;
