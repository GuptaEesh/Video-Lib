import { Link, useNavigate } from "react-router-dom";
import { Button, InputPass, InputTextBox } from "../../components";
import "../home/home.css";
export function SignUp() {
  const navigate = useNavigate();
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
          title="Name"
          inputClass="input-text md"
          inputPlaceHolder="type name..."
          inputType="text"
        />
        <InputTextBox
          title="Email"
          inputClass="input-text md"
          inputPlaceHolder="email..."
          inputType="email"
        />
        <InputPass
          title="Password"
          inputClass="input-text md"
          inputPlaceHolder="password..."
        />
        <InputPass
          title="Repeat Password"
          inputClass="input-text md"
          inputPlaceHolder="confirm password.."
        />
        <span className="text-white">
          Already a customer?
          <br />{" "}
          <Link to="/login">
            <span className="text-underline text-white">Log in here</span>
          </Link>
        </span>
        <Button
          btnText="Sign-In"
          btnType="primary-video btn text-white bold size-16"
          btnFunc={() => navigate("/videos")}
        />
      </div>
    </div>
  );
}
