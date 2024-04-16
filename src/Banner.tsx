import React, { useEffect, useState } from "react";

export function Heder() {
  let [, setTitle] = useState("");
  let [, setBody] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5001/places`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, []);

  return (
    <div className="Banner">
      <p className="sText">SUMMER VACATION</p>
      <p className="lText">Nomad nation</p>
      <a className="ReadMore">READ MORE</a>
    </div>
  );
}
