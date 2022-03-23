import "./youtube.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
export function MyYouTube({ videoId: id, title, desc }) {
  return (
    <div className="flex flex-column screen">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div
        className="flex flex-wrap justify-space-between"
        style={{ gap: "1rem" }}
      >
        <h2 className="text-white video-title">{title}</h2>
        <section className="flex align-center video-opt">
          <AiFillLike color="var(--white)" />
          <AiFillDislike color="var(--white)" />
          <MdPlaylistAdd color="var(--white)" />
        </section>
      </div>
      <p className="text-white video-desc">{desc}</p>
    </div>
  );
}
