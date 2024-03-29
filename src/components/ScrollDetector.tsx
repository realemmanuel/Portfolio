import { useEffect } from "react";

interface DetectorProps {
  onScroll: (hasScroll: boolean) => void;
}

const ScrollDetector = (props: DetectorProps) => {
  const { onScroll } = props;

  const handleScroll: any = () => {
    const scrollY = window.scrollY;
    onScroll(scrollY > 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default ScrollDetector;
