import { Link } from "react-router-dom";
import { Button, InputPass, InputTextBox } from "../../components";
import "../home/home.css";
export function Login() {
  return (
    <div
      className="home-page flex align-center flex-column justify-center"
      style={{ height: "100vh" }}
    >
      <div
        className="flex flex-column"
        style={{ gap: "1rem", padding: "1rem" }}
      >
        {" "}
        <InputTextBox
          title="Email"
          inputClass="input-text md"
          inputPlaceHolder="email....."
          inputType="email"
        />
        <InputPass
          title="Password"
          inputClass="input-text md"
          inputPlaceHolder="password..."
        />
        <span className="text-white">
          First time here?
          <br />{" "}
          <Link to="/signup">
            <span className="text-underline text-white">
              Let&apos;s open your account
            </span>
          </Link>
        </span>
        <Button
          btnText="Log-In"
          btnType="primary-video btn text-white bold size-16"
        />
      </div>
    </div>
  );
}
