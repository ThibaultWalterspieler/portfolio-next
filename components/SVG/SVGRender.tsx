import 'external-svg-loader';
import { FC } from 'react';

const SVGRender: FC<{
  url: string;
  color: string;
  width?: number | string;
  height?: number | string;
}> = ({ url, color, width, height }) => {
  return <svg data-src={url} fill={color} width={width} height={height} />;
};

export default SVGRender;
