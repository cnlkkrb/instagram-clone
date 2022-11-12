import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MessengerIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 108 108" fill="none" {...props}>
    <Path
      d="M25.8445 90.247L29.775 90.9894C30.0665 89.4462 29.4279 87.8751 28.1423 86.9729L25.8445 90.247ZM23.6068 102.093L19.6763 101.351C19.3992 102.818 19.9621 104.317 21.1363 105.239C22.3104 106.161 23.9003 106.353 25.2597 105.736L23.6068 102.093ZM36.9335 96.046L38.317 92.2929C37.3298 91.9289 36.2388 91.9687 35.2806 92.4035L36.9335 96.046ZM97.9385 54.7003C97.9385 76.7778 78.6976 95.1312 54.3809 95.1312V103.131C82.5948 103.131 105.938 81.6998 105.938 54.7003H97.9385ZM54.3809 14.2693C78.6976 14.2693 97.9385 32.6227 97.9385 54.7003H105.938C105.938 27.7007 82.5948 6.26929 54.3809 6.26929V14.2693ZM10.8232 54.7003C10.8232 32.6227 30.0641 14.2693 54.3809 14.2693V6.26929C26.1669 6.26929 2.82324 27.7007 2.82324 54.7003H10.8232ZM28.1423 86.9729C17.554 79.5418 10.8232 67.8089 10.8232 54.7003H2.82324C2.82324 70.6625 11.0345 84.74 23.5466 93.5211L28.1423 86.9729ZM27.5373 102.836L29.775 90.9894L21.914 89.5046L19.6763 101.351L27.5373 102.836ZM35.2806 92.4035L21.9539 98.4509L25.2597 105.736L38.5865 99.6885L35.2806 92.4035ZM54.3809 95.1312C48.6971 95.1312 43.2793 94.1221 38.317 92.2929L35.5501 99.7991C41.3917 101.952 47.7458 103.131 54.3809 103.131V95.1312Z"
      fill="white"
      strokeWidth={1}
      stroke='white'
    />
    <Path
      d="M38.0487 37.7211L21.6054 64.0305C21.3241 64.4806 21.8454 65.0011 22.295 64.7191L39.1525 54.148C39.3235 54.0408 39.5421 54.0469 39.7069 54.1634L65.9155 72.698C66.1565 72.8684 66.4919 72.7941 66.6384 72.5379L85.4332 39.6469C85.7082 39.1656 85.1122 38.6609 84.6828 39.0116L66.636 53.7498C66.4734 53.8826 66.245 53.8996 66.0644 53.7924L38.7281 37.5563C38.4944 37.4175 38.1928 37.4907 38.0487 37.7211Z"
      fill="white"
      strokeWidth={1}
      stroke='white'
    />
  </Svg>
);

export default MessengerIcon;
