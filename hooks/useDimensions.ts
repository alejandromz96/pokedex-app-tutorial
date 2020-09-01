import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export interface Size extends ScaledSize {
  pixelHeight: string;
  pixelWidth: string;
  isLandscape: boolean;
}
const useDimensions = (): Size => {
  const val = Dimensions.get('window');
  const currentDim: Size = {
    ...val,
    pixelHeight: `${val.height}px`,
    pixelWidth: `${val.width}px`,
    isLandscape: val.width > val.height,
  };

  const [dimensions, setDimensions] = useState<Size>(currentDim);

  const onDimensionsChange = (): void => {
    const newVal = Dimensions.get('window');
    const newDim: Size = {
      ...newVal,
      pixelHeight: `${newVal.height}px`,
      pixelWidth: `${newVal.width}px`,
      isLandscape: newVal.width > newVal.height,
    };
    setDimensions(newDim);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onDimensionsChange);
    return (): void => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  return dimensions;
};

export default useDimensions;
