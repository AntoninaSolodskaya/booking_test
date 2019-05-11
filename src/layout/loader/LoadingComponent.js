import React from 'react';
import { Wrapper, Container, Span } from './styled';
import Loader from 'react-loader-spinner';

const LoadingComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Loader 
          type="Oval" 
          color="#ffffff" 
          height={40} width={40} 
        />
        <Span>Loading...</Span>
      </Container>
    </Wrapper>
  )
};

export default LoadingComponent;