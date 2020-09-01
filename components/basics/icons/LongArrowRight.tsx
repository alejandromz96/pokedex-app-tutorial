import React from 'react';
import { Path } from 'react-native-svg';
import Icon, { IconProps } from '../Icon';
import colors from '../../../config/colors';

const LongArrowRight = ({
  color,
  size,
  type,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
  onPress,
  style,
}: IconProps): React.ReactElement => {
  return (
    <Icon
      size={size}
      type={type}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      onPress={onPress}
      style={style}
    >
      <Path
        fill={color || colors.greyMed}
        d="M18.2,12.44A1,1,0,0,0,18,11.35L13.1,6.46a1,1,0,0,0-1.42,1.42l3.18,3.17H6.73a1,1,0,0,0,0,2h8.13l-3.07,3.07a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L18,12.76A1,1,0,0,0,18.2,12.44Z"
      />
    </Icon>
  );
};

export default LongArrowRight;
