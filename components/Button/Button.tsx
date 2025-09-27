import type { LoadingButtonProps as MuiLoadingButtonProps } from '@mui/lab';
import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React from 'react';

type ButtonProps = MuiButtonProps & Partial<MuiLoadingButtonProps>;

export const Button = (props: ButtonProps) => {
  const isLoadingButtonProps = (loadingProps: ButtonProps): loadingProps is MuiLoadingButtonProps =>
    'loading' in loadingProps;

  if (isLoadingButtonProps(props) && props.loading) {
    return <MuiLoadingButton {...props} />;
  }
  return <MuiButton {...props} />;
};
export default Button;
