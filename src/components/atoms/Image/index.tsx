import { HTMLMotionProps, motion } from "framer-motion";
import { CSSProperties } from "styled-components";
import { ImageContainer } from "./style";

type ImageSize = "lg" | "md" | "sm" | string;

interface IImage extends HTMLMotionProps<"img"> {
  src: string;
  size?: ImageSize;
  style?: CSSProperties;
  className?: string;
}

const Image = (props: IImage) => {
  const getSize = (size: ImageSize): string => {
    switch (size) {
      case "lg":
        return "128px";
      case "md":
        return "64px";
      case "sm":
        return "32px";
      default:
        return size;
    }
  };

  return (
    <ImageContainer
      {...props}
      as={motion.img}
      src={props.src}
      className={props.className}
      size={props.size ? getSize(props.size) : undefined}
      style={{ ...props.style }}
    ></ImageContainer>
  );
};

export default Image;
