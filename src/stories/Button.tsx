import React from 'react';
import '../themes/thentia/sass/theme.sass'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'tc-btn-xs' | 'btn-sm' | 'default' | 'btn-lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'default',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-outline-primary';
  return (
    <button
      type="button"
      className={['btn', size, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
