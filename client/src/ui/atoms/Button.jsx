import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({
  children,
  variant,
  color,
  isDisabled,
  handleClick,
  startIcon,
  endIcon,
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      disabled={isDisabled}
      onClick={handleClick}
      disableTouchRipple
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
}
