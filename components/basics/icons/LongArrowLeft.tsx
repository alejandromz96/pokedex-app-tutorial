import React from 'react';
import { Path } from 'react-native-svg';
import Icon, { IconProps } from '../Icon';
import colors from '../../../config/colors';

const LongArrowLeft = ({
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
        d="M17.27,11.05H9.14l3.18-3.17A1,1,0,0,0,10.9,6.46L6,11.35a1,1,0,0,0,0,1.41l4.77,4.78a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.14,13.05h8.13a1,1,0,0,0,0-2Z"
      />
    </Icon>
  );
};

export default LongArrowLeft;
