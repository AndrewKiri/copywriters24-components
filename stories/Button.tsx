import React, { CSSProperties, ReactEventHandler } from 'react';
import './button.css';

export interface ButtonProps {
  primary?: boolean;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large',
  label: string;
  onClick: ReactEventHandler;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, style, size = 'medium', label, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};
