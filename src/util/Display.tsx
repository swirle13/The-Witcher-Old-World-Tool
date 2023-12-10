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

/**
 * Sets children components to Display only the set breakpoints. This
 * enables opposite behavior of Bootstrap breakpoints that define a
 * value where the behavior starts and works for all larger sizes.
 * @param props 
 * @returns 
 */
export const Display = (props: DisplayProps) => {
  // TODO: allow passing in values to each breakpoint to allow choosing the display type, e.g. block, inline, etc
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