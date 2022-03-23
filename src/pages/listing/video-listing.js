import { useState } from "react";
import { Loader, Nav, VideoCard } from "../../components";
import { useData } from "../../helpers/data-context";

export function ListingPage() {
  const { loader, videos } = useData();
  const [selectedVideos, setSelectedVideos] = useState(videos);
  let showVideos = selectedVideos.length === 0 ? videos : selectedVideos;
  return (
    <div>
      <Nav
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      {loader ? (
        <div
          className="flex align-center flex-column justify-center"
          style={{ marginTop: "20vh" }}
        >
          <Loader />
          <h2 className="text-white">Loading your videos! Hang in with us</h2>
        </div>
      ) : (
        <div
          className="flex flex-wrap justify-space-between"
          style={{ margin: "1rem", gap: "1rem" }}
        >
          {[...showVideos].map(
            ({ id, display_img: img, views, description: desc, title }) => (
              <VideoCard
                key={id}
                id={id}
                img={img}
                views={views}
                desc={desc}
                title={title}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
