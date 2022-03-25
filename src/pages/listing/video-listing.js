import { useState } from "react";
import { Loader, SmallNav, VideoCard } from "../../components";
import { useData } from "../../helpers/data-context";

export function ListingPage() {
  const { loader, videos } = useData();
  const [selectedVideos, setSelectedVideos] = useState(videos);
  let showVideos = selectedVideos.length === 0 ? videos : selectedVideos;
  return (
    <div className="flex flex-column">
      <SmallNav setSelectedVideos={setSelectedVideos} />
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
          style={{
            margin: "1rem",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "rgba(254, 121, 104, 0.5)",
            borderRadius: "0.5rem",
          }}
        >
          {[...showVideos].map(
            ({
              id,
              display_img: img,
              views,
              description: desc,
              title,
              likes,
            }) => (
              <VideoCard
                key={id}
                likes={likes}
                views={views}
                cardStyle="eg-card ecomm-card text-white"
                id={id}
                img={img}
                desc={desc}
                title={title}
                cardHeader="listedVideo"
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
