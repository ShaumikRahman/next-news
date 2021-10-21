import { useRef, useEffect, useState } from "react";

const Jump = () => {
  const jump = useRef();
  const [Y, setY] = useState(window.scrollY);

  let isMounted = true;

  document.body.onscroll = () => {
    if (isMounted) {
        setY(window.scrollY)
    } 
    
  };

  useEffect(() => {
    if (Y > 500) {
      jump.current.classList.add("visible");
    } else {
      jump.current.classList.remove("visible");
    }

    return () => {
        isMounted = false;
    }
  }, [Y]);

  return (
    <div
      className="jump"
      ref={jump}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      &#8593;
    </div>
  );
};

export default Jump;