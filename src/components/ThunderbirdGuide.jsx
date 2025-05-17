import StepCard from "./StepCard";
import ThunderDownloadImg from "../img/thunderbird/install.png";
import ThunderSetupImg from "../img/thunderbird/setup.png";
import ThunderCreateImg from "../img/thunderbird/create.png";
import ThunderDoneImg from "../img/thunderbird/done.png";

const ThunderbirdGuide = () => {
  return (
    <div>
      <h2 className="mb-4">Mozilla Thunderbird Setup</h2>
      <StepCard
        step="1"
        description={`Go to the official Thunderbird website: https://www.thunderbird.net and Click on Dowonload. It will download to you device.`}
        image={ThunderDownloadImg}
      />
      <StepCard
        step="2"
        description="Find the downloaded file in you pc and click install. As in the photo click ok to install then just follow the default installation. You will see the launch app as below image."
        image={ThunderSetupImg}
      />
      <StepCard
        step="3"
        description="After install and launch the app now you have to register the account with you gmail accout. So input your username gmail and your password then click continue. When you clicked on continue button it will show a form to login you gmail accout so you have to login and verify gmail account."
        image={ThunderCreateImg}
      />
      <StepCard
        step="4"
        description="After logged In and verified gmail account you will be able to use the app. So Mozilla Thunderbird is successfully set up."
        image={ThunderDoneImg}
      />
    </div>
  );
};

export default ThunderbirdGuide;
