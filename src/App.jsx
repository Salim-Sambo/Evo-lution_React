import { useState } from "react";
import { Background } from "./Components/Background/Background";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { useEffect } from "react";

const App = () => {
  let heroData = [
    { text1: "Dive into what", text2: "You love" },
    { text1: "Indulge", text2: "Your passion" },
    { text1: "Give into", text2: "Your passion" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <main>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </main>
  );
};

export default App;
