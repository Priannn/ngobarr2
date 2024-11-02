import React from "react";

const About = (props) => {
  const kurang = () => {
    if (props.count < 1) {
      return;
    }
    props.setCount(props.count - 1);
  };

  const tambah = () => {
    props.setCount(props.count + 1)
    return
  }
  return (
    <>
      <button onClick={tambah}>Tambah</button>
      <p>{props.count}</p>
      <button onClick={kurang}>Kurang</button>
    </>
  );
};

export default About;
