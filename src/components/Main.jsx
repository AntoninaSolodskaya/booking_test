import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Calendar from './Calendar';
import data from '../data';

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
  justify-content: space-around;
`;

class Main extends Component {
  render() {

    const { user } = this.props;

    return (
      <Fragment>
        {user &&
          <Wrapper>
            <Section>
              {data && data.map((room, index) => (
                <Card key={index} room={room}/>
              ))}  
            </Section>
            <Section>
              <Calendar />
            </Section>
          </Wrapper>}
      </Fragment>
      
    )
  }
}

export default Main;