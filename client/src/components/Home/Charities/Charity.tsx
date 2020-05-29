import React from "react";
import Avatar from "react-avatar";
// @ts-ignore
const charity = ({ data }) => {
  return (
    <a href={data.link.url} target="_blank" rel="noopener noreferrer">
      <Avatar
        alt={data.name}
        src={data.img}
        value={data.value}
        textSizeRatio={1}
        round={true}
        size="150"
      />
    </a>
  );
};

export default charity;
