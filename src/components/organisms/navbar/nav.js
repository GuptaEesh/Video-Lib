import { Button, Input } from "../../";
import React from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-column align-center">
      <header className="nav-bar with-shadow">
        <section>
          <Button
            btnText="Attr🔷ct"
            btnType="tertiary btn bold"
            btnFunc={() => navigate("/videos")}
          />
          <Button
            btnText="My L❗st"
            btnType="tertiary btn bold"
            btnFunc={() => navigate("/playlist")}
          />
        </section>
        <Input
          inputType="text"
          inputClass="input-text md"
          inputPlaceHolder="Search..."
        />
        <section className="flex align-center">
          <img
            className="profile-avatar img-sm xsm"
            alt="profile-img"
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        </section>
        <div className="nav-section-right align-center">
          <div className="icon-with-badge">
            <Link to="/watchlater">
              <span className="material-icons outlined lg text-white">
                bookmark
              </span>
            </Link>
          </div>
          <div className="icon-with-badge">
            <Link to="/likeList">
              <span className="material-icons outlined lg text-white">
                favorite
              </span>
            </Link>
          </div>
          <div className="icon-with-badge">
            <Link to="/history">
              <span className="material-icons outlined lg text-white">
                history
              </span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
