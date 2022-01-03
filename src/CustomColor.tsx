import React from 'react';
import '../dist';
import { ColorBox } from './components/ColorBox';
import { KanomaTheme } from './models/theme';

export interface Props {
  color: 'kanoma-purple' | 'kanoma-yellow' | 'primary' | 'secondary';
  gradiant?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const CustomColor = ({ color, gradiant }: Props) => {
  const bgColor = (gradiant
    ? `bg-${color}-${gradiant}`
    : `bg-${color}`) as unknown as KanomaTheme;

  return (
    <div className="flex">
      <ColorBox bgName={bgColor} />
    </div>
  );
};
