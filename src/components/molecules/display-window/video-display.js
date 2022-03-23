import { useNavigate } from "react-router-dom";
import "./video-display.css";
export function VideoCard({ img, views, desc, title, likes, id }) {
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
        <p className="bold">{views} Views</p>
        <p className="bold">{likes ?? 0} Likes</p>
        <p className="bold">{views} Views</p>
      </section>
    </div>
  );
}
