import React, { useEffect, useState } from "react";

type PlacesProps = {
  id?: number;
};

export const Places = ({ id = 0 }: PlacesProps) => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [img, setImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/places/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.place);
        setBody(data.desc);
        setImg(data.img);
      });
  }, [id]);

  return (
    <div className="place" style={{ backgroundImage: `url(${img})` }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
