import React from 'react';
import { ColorBox } from './components/ColorBox';
import { KanomaTheme } from './models/theme';

export interface Props {
  name: 'kanoma-purple' | 'kanoma-yellow';
}

export const ThemeColor = ({ name }: Props) => {
  const colors = [...Array(9)].map(
    (_, i) => `bg-${name}-${i + 1}00` as unknown as KanomaTheme
  );

  return (
    <div className="flex flex-wrap space-x-2">
      {colors.map((color, i) => (
        <div key={i}>
          <ColorBox bgName={color} />
        </div>
      ))}
    </div>
  );
};
