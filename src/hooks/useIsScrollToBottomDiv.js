import { useEffect, useState } from "react";

const useIsScrollToBottomDiv = () => {
  const [isBottom, setBottom] = useState(false);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight,  } = e.target.scrollingElement;
    
    const currentHeight = scrollTop + clientHeight;
    const bottom = ((currentHeight - 0.5) === scrollHeight) || currentHeight === scrollHeight;


    if (bottom) {
      setBottom(true);
    } else {
      setBottom(false);
    }  
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isBottom };
};

export default useIsScrollToBottomDiv;