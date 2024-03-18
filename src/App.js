import "./App.css";
import RevoLogo from "./images/RevoLogo";
import DownArrow from "./images/DownArrow";
import Icon1 from "./images/Icon1";
import Icon2 from "./images/Icon2";
import Icon3 from "./images/Icon3";
import Icon4 from "./images/Icon4";

import Icon1Small from "./images/Icon1Small";
import Icon2Small from "./images/Icon2Small";
import Icon3Small from "./images/Icon3Small";
import Icon4Small from "./images/Icon4Small";
import { useState } from "react";

function App() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    return false;
  };

  const Icons = [
    {
      icon: <Icon1 />,
      iconSmall: <Icon1Small />,
      text: "Explore all EV makes and models. Compare them side-by side",
    },
    {
      icon: <Icon2 />,
      iconSmall: <Icon2Small />,
      text: "Calculate your range and build your charge plan",
    },
    {
      icon: <Icon3 />,
      iconSmall: <Icon3Small />,
      text: "Find the best deal with exclusive offers from Revo’s dealer network",
    },
    {
      icon: <Icon4 />,
      iconSmall: <Icon4Small />,
      text: "Lean on our advisors to guide you along the way",
    },
  ];

  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <div className="p-2 text-big top-img flex flex-col justify-center items-center text-center">
        <div>Find your next electric vehicle</div>
        <div>
          with <strong>rEVo</strong>
        </div>
      </div>
      <div className="grow top-wrap">
        <div className="md:container md:mx-auto flex flex-col content-center place-items-center lg:gap-20 gap-5 lg:pt-20 pt-5 text-center">
          <div className="text-big p-2">
            We're along for <br /> the ride with you.
          </div>
          <div className="lg:flex text-small">
            {Icons.map((icon) => (
              <div
                key={icon.text}
                className="icon-content flex flex-col text-center p-5 gap-2"
              >
                <div className="hidden lg:block icon bg-black/50">
                  {icon.icon}
                </div>
                <div className="lg:hidden icon bg-white/90">
                  {icon.iconSmall}
                </div>
                <div>{icon.text}</div>
              </div>
            ))}
          </div>
          <div className="divider" />
        </div>
        <div className="text-white flex flex-col content-center place-items-center p-20 text-center">
          <div className="text-big">
            Sign up for early <br /> access today
          </div>
          <div className="p-10" style={{ display: sent ? "block" : "none" }}>
            Thanks!
          </div>
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyJ0m3n9GEbngkbLP1NZYs4DWvNHRMWUbVynJavGmRGvNS7Ys8aNfJWe_E20Ft1frXmZw/exec"
            className="flex flex-col content-center place-items-center gap-5 mt-20"
            style={{ display: sent ? "none" : "flex" }}
          >
            <input
              className="w-80 p-3 text-center text-black text-sm border rounded-full"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              required
            />
            <button
              className="w-80 bg-supergreen text-black text-sm p-3 border rounded-full"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="pt-20">
            <RevoLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
