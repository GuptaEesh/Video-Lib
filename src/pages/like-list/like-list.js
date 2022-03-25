import { VideoCard } from "../../components";
import { useList } from "../../helpers/list-context";
import "../history/history-list.css";
export function LikeList() {
  const { lists } = useList();

  return (
    <div className="flex flex-wrap justify-space-around selected-list">
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
