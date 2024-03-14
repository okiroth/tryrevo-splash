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

function App() {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <div className="grow top-wrap">
        <div className="md:container md:mx-auto flex flex-col content-center place-items-center lg:gap-20 gap-5 lg:pt-20 pt-5 text-center">
          <div>
            <RevoLogo />
          </div>
          <div className="text-big lg:pb-1 pb-5">
            Find your next <strong>EV</strong> with Revo
          </div>
          <div className="hidden lg:flex text-small">
            <div className="icon-content flex flex-col text-center p-5">
              <div className="icon bg-black/50">
                <Icon1 />
              </div>
              <div>
                Explore all EV makes and models. Compare them side-by side.{" "}
              </div>
            </div>
            <div className="icon-content flex flex-col text-center p-5">
              <div className="icon bg-black/50">
                <Icon2 />
              </div>
              <div>Calculate your range and build your charge plan.</div>
            </div>
            <div className="icon-content flex flex-col text-center p-5">
              <div className="icon bg-black/50">
                <Icon3 />
              </div>
              <div>
                Find the best deal with exclusive offers from Revo’s dealer
                network.
              </div>
            </div>
            <div className="icon-content flex flex-col text-center p-5">
              <div className="icon bg-black/50">
                <Icon4 />
              </div>
              <div>
                Find the best deal with exclusive offers from Revo’s dealer
                network.
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <DownArrow />
          </div>
        </div>
      </div>
      <div className="bg-lgray text-white flex flex-col content-center place-items-center p-20 text-center">
        <div className="text-md pb-5">We’re along for the ride with you.</div>
        <div className="text-md">Sign up for early access today:</div>
        <div className="pt-10">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email Address"
            className="w-80 p-3 text-center text-black text-sm border rounded-full"
          />
        </div>
        <div className="pt-5">
          <button className="w-80 bg-supergreen text-black text-sm p-3 border rounded-full">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden text-small flex flex-col gap-5 pt-10">
          <div className="icon-content flex flex-col text-center pt-5 gap-2">
            <div className="icon bg-white">
              <Icon1Small />
            </div>
            <div>
              Explore all EV makes and models. Compare them side-by side.{" "}
            </div>
          </div>
          <div className="icon-content flex flex-col text-center pt-5 gap-2">
            <div className="icon bg-white">
              <Icon2Small />
            </div>
            <div>Calculate your range and build your charge plan.</div>
          </div>
          <div className="icon-content flex flex-col text-center pt-5 gap-2">
            <div className="icon bg-white">
              <Icon3Small />
            </div>
            <div>
              Find the best deal with exclusive offers from Revo’s dealer
              network.
            </div>
          </div>
          <div className="icon-content flex flex-col text-center pt-5 gap-2">
            <div className="icon bg-white">
              <Icon4Small />
            </div>
            <div>
              Find the best deal with exclusive offers from Revo’s dealer
              network.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
