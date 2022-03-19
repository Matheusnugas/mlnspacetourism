import React, { useState } from "react";
import SpaceContext from "./SpaceContext";

const TodoProvider = ({ children }) => {
  const [techPage, setTechPage] = useState(1);

  const context = { techPage, setTechPage };

  return (
    <SpaceContext.Provider value={context}>{children}</SpaceContext.Provider>
  );
};

export { SpaceContext, TodoProvider as Provider };
