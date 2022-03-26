import { useNavigate } from "react-router-dom";
import { useList } from "../../../helpers/list-context";
import { useData } from "../../../helpers/data-context";
import { v4 as uuid } from "uuid";
import { AiFillLike, AiFillDelete } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { Input, Button } from "../../";
import "./video-display.css";
import { useState } from "react";
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
  const [text, setText] = useState();
  const [visible, setVisible] = useState(false);

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
        <div style={{ position: "relative" }}>
          <MdPlaylistAdd
            color="var(--white)"
            onClick={() => setVisible(!visible)}
          />
          {visible && (
            <div className="playlist flex flex-column text-white">
              <section className="flex justify-space-between">
                Playlist <GiCrossMark onClick={() => setVisible(!visible)} />
              </section>
              {lists.playlist.map(({ id: listId, info }) => {
                return (
                  <div
                    key={listId}
                    className="flex align-center"
                    style={{ gap: "1rem" }}
                  >
                    <Button
                      btnType="primary-video text-white bold btn without-shadow"
                      btnText="Add to"
                      btnFunc={() => {
                        dispatchList({
                          type: "ADD_TO_PLAYLIST",
                          payload: { video: id, id: listId },
                        });
                        setVisible(!visible);
                      }}
                      btnStyle={{ padding: "5px" }}
                    />
                    <h2 className="text-white">{info.name}</h2>
                    <AiFillDelete
                      color="var(--secondary-300)"
                      onClick={() =>
                        dispatchList({
                          type: "REMOVE_PLAYLIST",
                          payload: listId,
                        })
                      }
                    />
                  </div>
                );
              })}
              <Input
                inputPlaceHolder="new.."
                inputClass="add-playlist text-white"
                inputValue={text}
                inputFunc={(e) => setText(e.target.value)}
              />
              <Button
                btnText="Generate"
                btnType="primary-video text-white btn"
                btnFunc={() => {
                  dispatchList({
                    type: "GENERATE_PLAYLIST",
                    payload: { id: uuid(), info: { name: text, content: [] } },
                  });
                  setText("");
                }}
                btnStyle={{ padding: "5px" }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
