import React from 'react';

import { Title } from './styles';

const SimpleHeader: React.FC = ({children}) => {
  return (
    <Title>{children}</Title>
  );
};

export default SimpleHeader;
