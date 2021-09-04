import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export const DynamicText = () => {
  const dynamicTextRef = useRef();
  const knowledge = ['Nextjs', 'Redux', 'Nodejs', 'Express', 'MongoDB', 'API REST' ];

  useEffect(() => {
    init(dynamicTextRef.current, { showCursor: true, strings: knowledge });
    //eslint-disable-next-line
  }, []);

  return <span ref={ dynamicTextRef }></span>;
};
