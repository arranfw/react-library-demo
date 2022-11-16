import React from 'react';
import './Button.module.scss';

export const Button: React.FC = ({ children }) => {
  return <button type='button'>{children}</button>;
};
