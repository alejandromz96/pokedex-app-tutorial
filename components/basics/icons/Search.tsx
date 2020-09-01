import React from 'react';
import { Path } from 'react-native-svg';
import Icon, { IconProps } from '../Icon';
import colors from '../../../config/colors';

const Search = ({
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
        d="M22.51,21l-6-6a8.56,8.56,0,1,0-1.39,1.43l6,6a1,1,0,0,0,.7.3A1,1,0,0,0,22.51,21ZM3.2,9.82a6.54,6.54,0,1,1,6.54,6.54A6.55,6.55,0,0,1,3.2,9.82Z"
      />
    </Icon>
  );
};

export default Search;
