import { TypeAnimation } from 'react-type-animation';

const Words = () => {
  return (
    <TypeAnimation
      sequence={[
        "Competitive Programming",
        1000,
        "Developing web and app",
        1000,
        "Open Source Contribution",
        1000,
      ]}
      speed={10}
      repeat={Infinity}
      style={{color:'violet'}}
    />
  );
};

export default Words;