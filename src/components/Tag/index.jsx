import React from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_tag.scss";

const Tag = ({ tag }) => (
    <div className="tags">
      {tag}
    </div>
  );

function TagList() {
  return (
    <div className=".tag_line">
      {logements.map((logement) => (
        logement.tags.map((tag, index) => (
          <Tag
            key={`${logement.id}-${index}`}
            tag={tag}
          />
        ))
      ))}
    </div>
  );
}

export default TagList;