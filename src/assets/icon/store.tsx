import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StoreIcon = (props: SvgProps) => (
  <Svg width="28" height="29" viewBox="0 0 28 29" fill="none" {...props}>
    <Path
      d="M4.84203 11.3813C4.935 9.79538 6.24822 8.55688 7.83689 8.55688H20.163C21.7516 8.55688 23.0649 9.79538 23.1578 11.3813L23.6293 19.4229C23.7976 22.2944 21.5143 24.7155 18.6378 24.7155H9.36203C6.48557 24.7155 4.20227 22.2944 4.37061 19.4229L4.84203 11.3813Z"
      stroke="white"
      stroke-width="2"
    />
    <Path
      d="M10.3335 8.44574V6.69972C10.3335 4.96398 11.8969 3.55688 13.8255 3.55688C15.7541 3.55688 17.3176 4.96398 17.3176 6.69972V8.44574"
      stroke="white"
      stroke-width="2"
    />
    <Path
      d="M10.5078 11.9377C10.5078 11.9377 10.5078 15.6044 13.8253 15.6044C17.4919 15.6044 17.4919 11.9377 17.4919 11.9377"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

export default StoreIcon;
