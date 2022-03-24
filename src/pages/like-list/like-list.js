import { VideoCard } from "../../components";
import { useList } from "../../helpers/list-context";

export function LikeList() {
  const { lists } = useList();

  return (
    <div
      className="flex flex-wrap justify-space-around"
      style={{ gap: "1rem", marginTop: "1rem" }}
    >
      {lists.likeList.map(
        ({ display_img: img, description: desc, title, id }) => (
          <VideoCard key={id} img={img} desc={desc} title={title} id={id} />
        )
      )}
      ;
    </div>
  );
}
