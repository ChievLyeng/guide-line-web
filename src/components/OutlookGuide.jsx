import StepCard from "./StepCard";
import SingIn from "../img/outlook/signin.png";
import Email from "../img/outlook/email.png";
import Verify from "../img/outlook/verify.png";
import Done from "../img/outlook/done.png";

const OutlookGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Microsoft Outlook Setup</h2>
      <StepCard
        step="1"
        description="Open Microsoft Official Website https://www.microsoft.com find the outlook tap anc click on it then click on sign in button to sign in."
        image={SingIn}
      />
      <StepCard
        step="2"
        description="When You click on sign in it will link you to this form and you have to input your gmail account, microsoft accout or phone. So here I use gmail then I enter my gamil accout and click next."
        image={Email}
      />
      <StepCard
        step="3"
        description="So this step is require for you to verify you account if use gmail get the code that send to gmail for the verification."
        image={Verify}
      />
      <StepCard
        step="4"
        description="When verified account already you will be logged in to your out look and can start using it."
        image={Done}
      />
    </div>
  );
};

export default OutlookGuide;
