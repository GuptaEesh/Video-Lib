import { useList } from "../../helpers/list-context";
import { VideoCard } from "../../components";
import "./history-list.css";
export function HistoryList() {
  const { lists } = useList();

  return (
    <div
      className="flex flex-column "
      style={{ marginTop: "2rem", gap: "1rem" }}
    >
      {lists.history.map(
        ({
          id,
          display_img: img,
          description: desc,
          title,
          date,
          time,
          likes,
          views,
        }) => (
          <div key={time} className="flex justify-space-around selected-list">
            <VideoCard
              likes={likes}
              views={views}
              img={img}
              desc={desc}
              title={title}
              id={id}
              cardStyle="flex history-card text-white"
              cardHeader="historyVideo"
            />
            <section className="flex flex-wrap" style={{ gap: "1rem" }}>
              <h2 className="text-white bold">{date}</h2>
              <h2 className="text-white bold">{time}</h2>
            </section>
          </div>
        )
      )}
    </div>
  );
}
