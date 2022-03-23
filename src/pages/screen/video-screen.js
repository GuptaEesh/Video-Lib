import { useParams } from "react-router-dom";
import { MyYouTube } from "../../components";
import { useData } from "../../helpers/data-context";
export function VideoScreen() {
  const { id } = useParams();
  const { videos } = useData();
  return videos
    .filter((video) => video.id === id)
    .map(({ id, video_id, title, description: desc }) => (
      <MyYouTube key={id} videoId={video_id} desc={desc} title={title} />
    ));
}
