import React from 'react';

interface DisplayProps {
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  xl?: boolean,
  children: any,
  style?: React.CSSProperties,
}
export const Display = (props: DisplayProps) => {
  const {
    xs, sm, md, lg, xl, 
    children,
    ...rest
  } = props;

  let className = 'd-none';
  if (xs) className += ' d-sm-none d-block ';
  if (sm) className += ' d-md-none d-sm-inline ';
  if (md) className += ' d-lg-none d-md-inline ';
  if (lg) className += ' d-xl-none d-lg-inline ';
  if (xl) className += ' d-xl-inline ';

  return (
    <span 
      className={className}
      {...rest}
    >
      {children}
    </span>
  );
}