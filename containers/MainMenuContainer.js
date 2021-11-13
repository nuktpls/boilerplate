import { React, useRef } from "../dependencies";
import useListenOutsideEvents from "../../../tools/useListenOutsideEvents";
import { mainMenuEventsSettings } from "../config/";

import MainMenu from "../components/MainMenu";

const MainMenuContainer = props => {
  const { refState } = props;
  const { handleRefState } = props;
  const wrapperRef = useRef(null);
  const toggleConfig = mainMenuEventsSettings({
    wrapperRef,
    handleRefState,
    refState,
  });
  useListenOutsideEvents(toggleConfig);
  const isVisibleClass = refState ? "visible" : "not-visible";
  return <MainMenu wrapperRef={wrapperRef} isVisibleClass={isVisibleClass} />;
};

export default MainMenuContainer;
