import React from "react";

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="">DESTINATIONS</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href="">STORIES</a>
        </li>
      </ul>
    </div>
  );
};
