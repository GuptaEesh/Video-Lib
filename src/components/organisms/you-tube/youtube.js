import "./youtube.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { useList } from "../../../helpers/list-context";
import { useData } from "../../../helpers/data-context";
import { Modal } from "../../";
import { useState, useEffect } from "react";
export function MyYouTube({ id, videoId, title, desc }) {
  const { dispatchList, lists } = useList();
  const [visible, setVisible] = useState(false);
  const { videos } = useData();
  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [visible]);
  const likeHandler = () =>
    dispatchList({ type: "LIKE_VIDEO", payload: { id, videos } });
  const dislikeHandler = () =>
    dispatchList({ type: "DISLIKE_VIDEO", payload: id });
  return (
    <>
      {visible && <Modal setVisible={setVisible} video={id} />}
      <div className="flex flex-column screen">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div
          className="flex flex-wrap justify-space-between"
          style={{ gap: "1rem" }}
        >
          <h2 className="text-white video-title">{title}</h2>
          <section className="flex align-center video-opt">
            {lists.likeList.find((vid) => vid.id === id) ? (
              <AiFillLike color="var(--primary-400)" />
            ) : (
              <AiFillLike onClick={likeHandler} color="var(--white)" />
            )}
            {lists.likeList.find((vid) => vid.id === id) && (
              <AiFillDislike onClick={dislikeHandler} color="var(--white)" />
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

            <MdPlaylistAdd
              onClick={() => setVisible(true)}
              color="var(--white)"
            />
          </section>
        </div>
        <p className="text-white video-desc">{desc}</p>
      </div>
    </>
  );
}
