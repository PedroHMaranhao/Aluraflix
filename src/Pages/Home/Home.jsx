import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";

import { Main } from "./Home.styled";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";
import Modal from "../../Components/Modal";

const Home = () => {
  const { videos, loading } = useVideoContext();
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const featuredVideo = videos[0];

  return (
    <>
      <Main>
        {featuredVideo && <Banner video={featuredVideo} />}
        <CategoryVideos aoVideoSelecionado={video => {setVideoSelecionado(video); console.log("clicado")}}/>
        <Modal video={videoSelecionado} />
      </Main>
    </>
  );
};

export default Home;
