import React from "react";
import BarGroup from "../components/BarGroup/BarGroup";
import ChoosePicGroup from "../components/ChoosePicGroup/ChoosePicGroup";
import ChooseLevelGroup from "../components/ChooseLevelGroup/ChooseLevelGroup";
import TimerGroup6 from "../components/TimerGroup/TimerGroup6";
import PuzzleGroup from "../components/PuzzleGroup/PuzzleGroup";

<main>
  <section className="BarGroup">
    <BarGroup
      userIcon={userIcon}
      setUserIcon={setUserIcon}
      helpIcon={helpIcon}
      setHelpIcon={setHelpIcon}
      settingsIcon={settingsIcon}
      setSettingsIcon={setSettingsIcon}
      username={username}
      setUsername={setUsername}
    />
  </section>

  <section className="ChoosePicGroup">
    <ChoosePicGroup
      pic1={pic1}
      setPic1={setPic1}
      pic2={pic2}
      setPic2={setPic2}
      pic3={pic3}
      setPic3={setPic3}
    />
  </section>
  <section className="ChooseLevelGroup">
    <ChooseLevelGroup
      easy={easy}
      setEasy={setEasy}
      middle={middle}
      setMiddle={setMiddle}
      hard={hard}
      setHard={setHard}
    />
  </section>
  <TimerGroup6 />
  <section className="PuzzleGroup">
    <PuzzleGroup
      pic1={pic1}
      pic2={pic2}
      pic3={pic3}
      easy={easy}
      middle={middle}
      hard={hard}
    />
  </section>
</main>;

export default App;
