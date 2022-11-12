import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

const VideoIcon = (props: SvgProps) => (
  <Svg width="22" height="23" viewBox="0 0 22 23" fill="none" {...props}>
    <Rect
      x="1"
      y="1.55688"
      width="20"
      height="20"
      rx="6"
      stroke="white"
      strokeWidth="2"
    />
    <Path
      d="M1.74609 6.66806H9.07943H20.254M15.1905 6.14425L13.9683 4.04901L12.9207 2.30298M8.90482 6.31885L7.6826 4.22361L6.63498 2.47758"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <Path
      d="M8.5961 11.3037C8.61374 10.5549 9.41799 10.0906 10.0753 10.4497L14.6153 12.9303C15.3001 13.3044 15.3116 14.2837 14.6359 14.6739L9.974 17.3654C9.29824 17.7555 8.45591 17.2559 8.47428 16.4758L8.5961 11.3037Z"
      fill="white"
    />
  </Svg>
);

export default VideoIcon;