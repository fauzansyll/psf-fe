import React from "react";
import Logo from "../atoms/Logo";
import { Circle } from "../atoms/Circle";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="d-flex flex-column flex-lg-row w-75 justify-content-between">
        <div className="d-flex flex-column gap-5">
          <h4>Quick Link</h4>
          <div className="">Contact</div>
          <div className="">FAQ</div>
          <div className="">Terms & Conditions</div>
        </div>
        <div className="d-flex flex-column gap-5">
          <div className="">
            Jl. Gatot Subroto No. 72, Pancoran, Jakarta Selatan, 12780
          </div>
          <div className="">021 - 25034640</div>
          <div className="">0812 1229 2977</div>
          <div className="">info@pancoransoccerfield.com</div>
        </div>
        <div className="d-flex flex-column gap-5">
          <div className="">
            <h4>Manage By</h4>
          </div>
          <div className="">
            <Logo />
          </div>
          <div className="d-flex gap-3">
            <Circle
              icon="tiktok"
              link="https://www.tiktok.com/@pancoransoccerfield?is_from_webapp=1&sender_device=pc"
            />
            <Circle
              icon="instagram"
              link="https://www.instagram.com/pancoransoccerfield/"
            />
            <Circle
              icon="geo-alt-fill"
              link="https://www.google.com/maps/place/Pancoran+Soccer+Field+(Lapangan+Sepak+Bola+TNI+AU+Pancoran)/@-6.2439697,106.8422233,15z/data=!4m6!3m5!1s0x2e69f38f864ac405:0xcb37bbfc84d2952b!8m2!3d-6.2439697!4d106.8422233!16s%2Fg%2F11h3jd0p2z?sa=X&ved=2ahUKEwj3paKljbmEAxWHSGwGHSi9ACUQ_BJ6BAgLEAA&entry=tts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
