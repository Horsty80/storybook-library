import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;
  /** Which variant look would you like use */
  variant: 'primary' | 'secondary';
}

/** This is a special button !! */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        // good contrast
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        // bad contrast accessibily
        // backgroundColor: 'black',
        // color: 'black',
      }}
    >
      {children}
    </button>
  );
};
