import {Layout, Text} from './Badge.styles';
import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  pattern: string;
  theme?: string;
  size?: string;
}

const Badge = ({children, pattern, theme, size}: BadgeProps) => {
  return (
    <Layout pattern={pattern} theme={theme} size={size}>
      <Text pattern={pattern} theme={theme} size={size}>
        {children}
      </Text>
    </Layout>
  );
};

export default Badge;
