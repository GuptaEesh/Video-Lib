import { VideoCard } from "../../components";
import { useData } from "../../helpers/data-context";
import { useList } from "../../helpers/list-context";

export function PlayList() {
  const { videos } = useData();
  const { lists } = useList();
  return lists.playlist.map(({ id, info }) => (
    <div
      key={id}
      className="flex flex-column align-center"
      style={{ margin: "1rem", gap: "1rem" }}
    >
      <h1 className="text-white">
        PlayList Name :{" "}
        <span className="text-blue bold size-20">{info.name}</span>
      </h1>
      <div className="flex text-white flex-wrap justify-space-between">
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
              id,
              display_img: img,
              description: desc,
              title,
              date,
              time,
            }) => (
              <div
                key={time}
                className="flex justify-space-around"
                style={{ gap: "1rem" }}
              >
                <VideoCard img={img} desc={desc} title={title} id={id} />
                <section className="flex flex-wrap" style={{ gap: "1rem" }}>
                  <h2 className="text-white">{date}</h2>
                  <h2 className="text-white">{time}</h2>
                </section>
              </div>
            )
          )}
      </div>
    </div>
  ));
}
