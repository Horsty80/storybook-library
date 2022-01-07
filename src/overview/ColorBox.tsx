import React, { useLayoutEffect, useRef, useState } from 'react';
import { RGBToHex } from '../../lib/colorHelpers';
import { KanomaTheme } from '../../models/theme';

interface Props {
  bgName: KanomaTheme;
}


export const ColorBox = ({ bgName }: Props) => {
  const colorRef = useRef(null);
  const [hexaColor, setHexaColor] = useState('');
  const [rgb, setRgb] = useState('');

  useLayoutEffect(() => {
    if (colorRef && colorRef.current) {
      const style = getComputedStyle(colorRef.current);
      setRgb(style.backgroundColor);
      setHexaColor(RGBToHex(style.backgroundColor));
    }
  }, []);

  return (
    <div className="p-3 flex flex-col space-y-3">
      <div
        ref={colorRef}
        className={`h-[75px] w-[75px] shadow-lg rounded-md ${bgName}`}
      />
      <div className="flex flex-col text-sm">
        <p>
          <span className={`font-semibold`}>Hexa :</span> {hexaColor}
        </p>
        <p>
          <span className={`font-semibold`}>Rgb :</span> {rgb}
        </p>
        <p>
          <span className={`font-semibold`}>Class :</span> {bgName}
        </p>
      </div>
    </div>
  );
};
