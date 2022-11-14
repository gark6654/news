import Svg, { Path } from 'react-native-svg';
import { EColors, IIconProps } from '@types';

const Eye = ({
  width = 22,
  height = 22,
  fill = EColors.black,
  style,
}: IIconProps) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={style}>
    <Path
      d="M16.8819 18.297C15.1231 19.4126 13.0826 20.0033 10.9999 20C5.60791 20 1.12191 16.12 0.180908 11C0.610938 8.67072 1.78254 6.5429 3.52091 4.934L0.391908 1.808L1.80691 0.393002L21.6059 20.193L20.1909 21.607L16.8809 18.297H16.8819ZM4.93491 6.35C3.57591 7.58559 2.62923 9.20879 2.22291 11C2.5352 12.3665 3.16217 13.6411 4.05391 14.7226C4.94565 15.804 6.07753 16.6624 7.35946 17.2293C8.64139 17.7962 10.038 18.0561 11.438 17.9881C12.838 17.9202 14.2029 17.5264 15.4239 16.838L13.3959 14.81C12.5326 15.3538 11.5101 15.5881 10.4961 15.4744C9.48218 15.3608 8.53695 14.9059 7.81548 14.1844C7.09401 13.463 6.63914 12.5177 6.52547 11.5038C6.4118 10.4898 6.64609 9.46731 7.18991 8.604L4.93491 6.35ZM11.9139 13.328L8.67191 10.086C8.49397 10.5389 8.4521 11.034 8.55141 11.5103C8.65073 11.9867 8.88693 12.4238 9.23103 12.7679C9.57513 13.112 10.0122 13.3482 10.4886 13.4475C10.965 13.5468 11.46 13.5049 11.9129 13.327L11.9139 13.328ZM19.8069 15.592L18.3759 14.162C19.0444 13.2093 19.5203 12.1352 19.7769 11C19.5051 9.80973 18.9942 8.68715 18.2751 7.7005C17.5559 6.71384 16.6437 5.88373 15.5938 5.26061C14.5439 4.63748 13.3782 4.23437 12.1676 4.07577C10.9571 3.91716 9.72691 4.00638 8.55191 4.338L6.97391 2.76C8.22091 2.27 9.57991 2 10.9999 2C16.3919 2 20.8779 5.88 21.8189 11C21.5125 12.6657 20.8238 14.2376 19.8069 15.592ZM10.7229 6.508C11.3594 6.46867 11.997 6.56507 12.5935 6.79082C13.1899 7.01657 13.7315 7.36651 14.1825 7.81745C14.6334 8.26839 14.9833 8.81003 15.2091 9.40646C15.4348 10.0029 15.5312 10.6405 15.4919 11.277L10.7219 6.508H10.7229Z"
      fill={fill}
    />
  </Svg>
);

export default Eye;
