import React from "react";

const Title = ({ children, addClass, emin }) => {
  return <div className={`${addClass}`}>{children}</div>;
};

export default Title;
