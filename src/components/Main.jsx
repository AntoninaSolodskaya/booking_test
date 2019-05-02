import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Calendar from './Calendar';

const Wrapper = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Section>
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <Section>
          <Calendar />
        </Section>
      </Wrapper>
    )
  }
}

export default Main;