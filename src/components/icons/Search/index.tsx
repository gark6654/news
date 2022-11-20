import { EColors, IIconProps } from '@types';
import { Svg, G, Defs, ClipPath, Rect, Path } from 'react-native-svg';

const Search = ({
  width = 24,
  height = 24,
  fill = EColors.black,
  style,
}: IIconProps) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={style}>
    <G clip-path="url(#clip0_1068_2727)">
      <Path
        d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1068_2727">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Search;
