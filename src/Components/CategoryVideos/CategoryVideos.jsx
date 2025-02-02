import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryContainer, CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = ({ aoVideoSelecionado }) => {
  const { videoCategory } = useVideoContext();

  return (
    <CategoryContainer>
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <CategoryTitle category={category}>{category}</CategoryTitle>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card aoVideoSelecionado={aoVideoSelecionado} key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </CategoryContainer>
  );
};

export default CategoryVideos;
