import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

interface IImgTag
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const ImgTag: FC<IImgTag> = ({ url, alt, width, height }) => {
  return (
    <picture>
      <source srcSet={url} type="image/avif" />
      <source srcSet={url} type="image/webp" />
      <img src={url} alt={alt} width={width} height={height} />
    </picture>
  );
};

export default ImgTag;
