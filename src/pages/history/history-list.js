import { useList } from "../../helpers/list-context";
import { VideoCard } from "../../components";
export function HistoryList() {
  const { lists } = useList();

  return (
    <div
      className="flex flex-column "
      style={{ marginTop: "2rem", gap: "1rem" }}
    >
      {lists.history.map(
        ({ id, display_img: img, description: desc, title, date, time }) => (
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
  );
}
