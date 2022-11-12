import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ShareIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 111 97" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M108.004 4.03953C107.199 2.62017 105.661 1.76855 104.004 1.76855L6.27434 1.83952C4.30981 1.83952 2.60563 3.04598 1.91923 4.86749C1.42218 6.19223 1.54052 7.61159 2.20326 8.77074C2.46362 9.19655 2.79498 9.5987 3.19736 9.95354L40.8549 42.4096L50.0385 91.1647C50.3935 93.0808 51.861 94.5002 53.8019 94.8077C55.7191 95.1152 57.6126 94.2163 58.6067 92.5367L107.98 8.65246C108.833 7.20944 108.833 5.4589 108.004 4.03953ZM12.9254 8.86536H92.5009L44.5946 36.1881L12.9254 8.86536ZM55.8138 83.2636L48.0976 42.2913L96.0749 14.945L55.8138 83.2636Z"
      fill="white"
      stroke="white"
      strokeWidth="3"
    />
  </Svg>
);

export default ShareIcon;