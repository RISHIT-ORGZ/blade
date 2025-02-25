import type { ReactElement } from 'react';
import type { GProps } from './types';

const G = ({ clipPath, fill, children }: GProps): ReactElement => {
  return (
    <g clipPath={clipPath} fill={fill}>
      {children}
    </g>
  );
};

export default G;
