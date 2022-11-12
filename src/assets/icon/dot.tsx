import * as React from 'react';
import Svg, {SvgProps, Ellipse} from 'react-native-svg';

const DotIcon = (props: SvgProps) => (
  <Svg width="20" height="14" viewBox="0 0 64 14" fill="white" {...props}>
    <Ellipse
      cx="6.72046"
      cy="7.19092"
      rx="6.37671"
      ry="6.37317"
      fill="white"
    />
    <Ellipse
      cx="31.7185"
      cy="7.19092"
      rx="6.37671"
      ry="6.37317"
      fill="white"
    />
    <Ellipse
      cx="57.2253"
      cy="7.19092"
      rx="6.37671"
      ry="6.37317"
      fill="white"
    />
  </Svg>
);

export default DotIcon;
