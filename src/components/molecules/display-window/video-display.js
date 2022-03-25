import { useNavigate } from "react-router-dom";
import { useList } from "../../../helpers/list-context";
import { useData } from "../../../helpers/data-context";
import { AiFillLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs";

import "./video-display.css";
export function VideoCard({
  img,
  title,
  id,
  cardStyle,
  cardHeader,
  likes,
  views,
}) {
  const { videos } = useData();
  const navigate = useNavigate();
  const { dispatchList, lists } = useList();
  return (
    <div
      id={cardHeader}
      style={{
        height: "max-content",
        position: "relative",
        width: "max-content",
      }}
    >
      <div
        className={cardStyle}
        onClick={() => {
          dispatchList({ type: "ADD_TO_HISTORY", payload: { id, videos } });
          navigate(`/videos/${id}`);
        }}
      >
        <img src={img} alt={title} loading="lazy" />

        <h2 className=" text-blue bold size-12">{title}</h2>
      </div>
      <section className=" flex flex-wrap video_status">
        <p className="bold xsm">{likes} Likes</p>
        <p className="bold xsm">{views} Views</p>
        {(lists.likeList.some((vid) => vid.id === id) && (
          <AiFillLike
            color="var(--primary-400)"
            onClick={() => dispatchList({ type: "DISLIKE_VIDEO", payload: id })}
          />
        )) || (
          <AiFillLike
            onClick={() =>
              dispatchList({ type: "LIKE_VIDEO", payload: { id, videos } })
            }
            color="var(--white)"
          />
        )}
        {lists.watchLater.find((vid) => vid.id === id) ? (
          <BsFillBookmarkCheckFill
            onClick={() =>
              dispatchList({ type: "REMOVE_FROM_WATCHLATER", payload: id })
            }
            color="var(--primary-400)"
          />
        ) : (
          <BsFillBookmarkFill
            onClick={() =>
              dispatchList({
                type: "ADD_TO_WATCHLATER",
                payload: { id, videos },
              })
            }
            color="var(--white)"
          />
        )}
        <MdPlaylistAdd color="var(--white)" />
      </section>
    </div>
  );
}
