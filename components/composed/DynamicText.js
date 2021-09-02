import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export const DynamicText = () => {
  const dynamicTextRef = useRef();

  useEffect(() => {
    init(dynamicTextRef.current, { showCursor: true, strings: ['Nextjs', 'Redux', 'Fullstack MERN', 'API REST' ] });
  }, []);

  return <span ref={ dynamicTextRef }></span>;
};
