import { Svg, G, Path, ClipPath, Defs, Rect } from 'react-native-svg';
import { EColors, IIconProps } from '@types';
import { StyleSheet } from 'react-native';

interface IProps extends IIconProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

const Arrow = ({
  width = 24,
  height = 24,
  fill = EColors.black,
  direction = 'down',
  style,
}: IProps) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={[styles[direction], style]}>
    <G clip-path="url(#clip0_78_10286)">
      <Path
        d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22205L13.192 5.63605L7.828 11Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_78_10286">
        <Rect width={width} height={height} />
      </ClipPath>
    </Defs>
  </Svg>
);

const styles = StyleSheet.create({
  up: {
    transform: [{
      rotate: '90deg',
    }],
  },
  down: {
    transform: [{
      rotate: '-90deg',
    }],
  },
  left: {},
  right: {
    transform: [{
      rotate: '180deg',
    }],
  },
});

export default Arrow;
