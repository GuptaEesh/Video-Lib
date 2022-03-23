import { Button, Input } from "../../";
import React from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../helpers/data-context";

export function Nav({ setSelectedVideos }) {
  const { categories, videos } = useData();
  const navigate = useNavigate();
  const categoryHandler = (name) => {
    const newVids =
      name === "All"
        ? videos
        : [...videos].filter((video) => video.categoryName === name);
    setSelectedVideos(newVids);
  };
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
            btnFunc={() => navigate("/videos")}
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
            <Link to="">
              <span className="material-icons outlined lg text-white">
                favorite
              </span>
            </Link>
          </div>
          <div className="icon-with-badge">
            <Link to="">
              <span className="material-icons outlined lg text-white">
                history
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div className="nav-section-left flex-wrap">
        {[...categories, { id: 4, categoryName: "All" }].map(
          ({ categoryName: name, id }) => (
            <Button
              key={id}
              btnText={name}
              btnType="bold btn"
              btnFunc={() => categoryHandler(name)}
              btnStyle={{
                backgroundColor: "var(--red-400)",
                color: "var(--white)",
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
