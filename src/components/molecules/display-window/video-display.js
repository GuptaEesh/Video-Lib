import { useNavigate } from "react-router-dom";
import "./video-display.css";
export function VideoCard({ img, desc, title, id }) {
  const video_status = {
    backgroundColor: "var(--red-400)",
    padding: "0.5rem",
    gap: "1rem",
  };
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-column video-card text-white justify-space-between"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <section className="flex" style={{ gap: "10px" }}>
        <img src={img} alt={title} loading="lazy" style={{ width: "60%" }} />
        <h2>{title}</h2>
      </section>
      <p className="text-justify sm">{desc}</p>
      <section className="flex flex-wrap" style={video_status}>
        <p className="bold">{(Math.random() * 10).toPrecision(2)}k Likes</p>
        <p className="bold">{(Math.random() * 10).toPrecision(2)}M Views</p>
      </section>
    </div>
  );
}
