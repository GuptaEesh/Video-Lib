import { VideoCard } from "../../components";
import { useList } from "../../helpers/list-context";

export function LikeList() {
  const { lists } = useList();

  return (
    <div
      className="flex flex-wrap justify-space-around"
      style={{
        gap: "1rem",
        marginTop: "1rem",
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "rgba(254, 121, 104, 0.5)",
        borderRadius: "0.5rem",
      }}
    >
      {lists.likeList.map(
        ({ display_img: img, description: desc, title, id, likes, views }) => (
          <VideoCard
            likes={likes}
            views={views}
            key={id}
            img={img}
            desc={desc}
            title={title}
            id={id}
            cardStyle="text-white ecomm-card eg-card"
            cardHeader="likedVideo"
          />
        )
      )}
      ;
    </div>
  );
}
