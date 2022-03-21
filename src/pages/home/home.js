import { Button } from "../../components";
import "./home.css";
export function Home() {
  return (
    <div className="home-page flex align-center justify-center">
      <div className="flex align-center flex-column" style={{ gap: "1rem" }}>
        <h2 className="size-16 text-white">Welcome to the world of cars</h2>
        <Button
          btnText="Sign-In"
          btnType="primary-video btn text-white bold size-16"
          btnStyle={{ padding: "10px 1.5rem" }}
        />
      </div>
    </div>
  );
}
