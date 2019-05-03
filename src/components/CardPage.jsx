import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import data from '../data';

const Container = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 100px;
  font-size: 20px;
`;

class CardPage extends Component {

  state = {
    data: data
  };

  closeCard = () => {
    this.props.history.goBack()
  };

  render() {
    
    return (
      <Container>
       <Calendar />
       <ButtonWrap>
          <Button onClick={this.closeCard}>Back</Button>
        </ButtonWrap>
     </Container>
    )
  }
}

export default CardPage;