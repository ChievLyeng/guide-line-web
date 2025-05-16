import React, { useState } from "react";
import Navbar from "./components/NavbarMenu";
import GmailGuide from "./components/GmailGuide";
import OutlookGuide from "./components/OutlookGuide";
import ThunderbirdGuide from "./components/ThunderbirdGuide";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selected, setSelected] = useState("thunderbird");

  const renderContent = () => {
    switch (selected) {
      case "thunderbird":
        return <ThunderbirdGuide />;
      case "outlook":
        return <OutlookGuide />;
      case "gmail":
        return <GmailGuide />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar selected={selected} setSelected={setSelected} />
      <main className="flex-fill container py-4">{renderContent()}</main>
    </div>
  );
};

export default App;
