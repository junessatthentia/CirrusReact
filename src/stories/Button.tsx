import React from 'react';
import '../themes/thentia/sass/theme.sass'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
    /**
   * Does this button play a role?
   */
  level?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
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
  level = 'primary',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-' : 'btn-outline-';
  const role = level;
  return (
    <button
      type="button"
      className={['btn', size, `${mode}${role}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
