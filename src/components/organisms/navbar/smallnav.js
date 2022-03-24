import { useData } from "../../../helpers/data-context";
import { Button } from "../../atoms/button";

export function SmallNav({ setSelectedVideos }) {
  const { categories, videos } = useData();
  const categoryHandler = (name) => {
    const newVids =
      name === "All"
        ? videos
        : [...videos].filter((video) => video.categoryName === name);
    setSelectedVideos(newVids);
  };
  return (
    <div className="nav-section-left flex-wrap" style={{ alignSelf: "center" }}>
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
  );
}
