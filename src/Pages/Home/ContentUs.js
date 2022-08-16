import React, { useState } from "react";
import logo from "../../icons/logoWithoutBg.png";
import { useSpring, animated, config } from 'react-spring'

const ContentUs = () => {
  const [flip, set] = useState(false);

  const words = ["Royal", "Manufacturer"];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <section className="mt-20">
      <div className="card bg-base-100 shadow-xl mx-5 lg:mx-20 ">
        <div className="card-body">
          <div className="avatar mx-auto mt-[-20px]">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={logo} alt="" />
            </div>
          </div>
          <article className="text-center mt-2">
            Hello! Thank you for visiting our tools, we always put tools quality
            and customer support first, if the tools is right for you please buy
            tools to enjoy the full range of quality features. Its amazing tools
            are very useful. Thank you very much!
          </article>
          <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 50,
        fontWeight: 'bold',
        overflow: 'auto',
        fontSize: '1.5em',
      }}
      scrollTop={scroll}>
      {words.map((word, i) => (
        <div
          key={`${word}_${i}`}
          style={{ width: '100%', height: 50, textAlign: 'center' }}>
          {word}
        </div>
      ))}
    </animated.div>
        </div>
      </div>
    </section>
  );
};

export default ContentUs;
