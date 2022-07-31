import {Layout, Text} from './Badge.styles';
import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  pattern: string;
  theme?: string;
}

const Badge = ({children, ...props}: BadgeProps) => {
  return (
    <Layout {...props}>
      <Text {...props}>
        {children}
      </Text>
    </Layout>
  );
};

export default Badge;
