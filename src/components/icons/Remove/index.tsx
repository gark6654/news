import Svg, { Path } from 'react-native-svg';
import { EColors, IIconProps } from '@types';

const Remove = ({
  width = 14,
  height = 14,
  fill = EColors.errorDark,
  style,
}: IIconProps) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={style}>
    <Path
      d="M6.99999 5.586L11.95 0.636002L13.364 2.05L8.41399 7L13.364 11.95L11.95 13.364L6.99999 8.414L2.04999 13.364L0.635986 11.95L5.58599 7L0.635986 2.05L2.04999 0.636002L6.99999 5.586Z"
      fill={fill}
    />
  </Svg>
);

export default Remove;
