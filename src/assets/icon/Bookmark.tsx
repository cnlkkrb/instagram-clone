import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BookMarkIcon = (props: SvgProps) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 95 111"
    fill="none"
    {...props}>
    <Path
      d="M87.7413 1.67017H7.39526C4.2388 1.67017 1.65625 3.96137 1.65625 6.7932V106.01C1.65625 108.842 3.52143 109.563 5.84572 107.581L45.244 74.062C46.1622 73.2897 47.6831 73.2897 48.6013 74.0363L89.2622 107.658C91.5865 109.589 93.4803 108.842 93.4803 106.01V6.7932C93.4803 3.96137 90.9265 1.67017 87.7413 1.67017ZM84.8718 93.5502L54.4264 68.3726C52.303 66.622 49.6343 65.7467 46.937 65.7467C44.1823 65.7467 41.4563 66.6478 39.3328 68.4499L10.2648 93.1898V9.39334H84.8718V93.5502Z"
      fill="white"
      stroke="white"
      strokeWidth="3"
    />
  </Svg>
);

export default BookMarkIcon;
