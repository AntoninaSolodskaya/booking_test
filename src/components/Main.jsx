import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    )
  }
}

export default Main;