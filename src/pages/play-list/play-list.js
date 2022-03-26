import { VideoCard } from "../../components";
import { useData } from "../../helpers/data-context";
import { useList } from "../../helpers/list-context";
import { GiCrossMark } from "react-icons/gi";
import "../history/history-list.css";
export function PlayList() {
  const { videos } = useData();
  const { lists, dispatchList } = useList();
  return lists.playlist.map(({ id, info }) => (
    <div key={id} className="flex flex-column align-center selected-list">
      <h1 className="text-white">
        PlayList Name :{" "}
        <span
          className="text-blue bold size-16"
          style={{
            backgroundColor: "var(--white)",
            padding: "5px",
            borderRadius: "0.5rem",
          }}
        >
          {info.name}
        </span>
      </h1>

      <div
        className="flex text-white flex-wrap justify-space-between"
        style={{ gap: "1rem" }}
      >
        {[...videos]
          .reduce(
            (acc, curr) =>
              info.content.find((item) => item === curr.id)
                ? [...acc, curr]
                : acc,
            []
          )
          .map(
            ({
              id: vid,
              display_img: img,
              description: desc,
              title,
              likes,
              views,
            }) => (
              <div
                key={vid}
                style={{
                  height: "max-content",
                  backgroundColor: "var(--white-200)",
                  padding: "var(--size-16)",
                  position: "relative",
                  width: "max-content",
                }}
              >
                <GiCrossMark
                  color="var(--white)"
                  onClick={() =>
                    dispatchList({
                      type: "REMOVE_FROM_PLAYLIST",
                      payload: { vid, id },
                    })
                  }
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "2%",
                    right: "5%",
                  }}
                />
                <div
                  className="flex justify-space-around "
                  style={{ gap: "1rem" }}
                >
                  <VideoCard
                    img={img}
                    likes={likes}
                    views={views}
                    desc={desc}
                    title={title}
                    id={vid}
                    cardStyle="playlist-card"
                    cardHeader="playListedVideo"
                  />
                  <section
                    className="flex flex-wrap"
                    style={{ gap: "1rem" }}
                  ></section>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  ));
}
