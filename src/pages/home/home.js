import { Button, CategoryCard } from "../../components";
import { useData } from "../../helpers/data-context";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./home.css";
import { Link } from "react-router-dom";
export function Home() {
  const { categories } = useData();
  return (
    <div style={{ backgroundColor: "var(--primary-400)" }}>
      <div
        className="home-page flex flex-column align-center justify-center"
        style={{ gap: "4rem" }}
      >
        <div className="flex align-center flex-column" style={{ gap: "1rem" }}>
          <h1 className="size-24 text-white">Welcome to the world of cars</h1>
          <h2 className="text-white">
            Take your snacks and sit back and chillax!
          </h2>
          <Link to="/login">
            <Button
              btnText="Sign-In"
              btnType="primary-video btn text-white bold size-16"
              btnStyle={{ padding: "10px 1.5rem" }}
            />
          </Link>
        </div>
        <section className="flex flex-column align-center">
          <h2 className="text-white">Explore Categories</h2>
          <BsChevronDoubleDown color="var(--red-400)" size="4rem" />
        </section>
      </div>
      <div className="flex flex-column" style={{ gap: "5rem" }}>
        {categories.map(
          ({ id, categoryName: name, description, image }, index) => (
            <CategoryCard
              index={index}
              key={id}
              imgSrc={image}
              desc={description}
              title={name}
            />
          )
        )}
      </div>
    </div>
  );
}
