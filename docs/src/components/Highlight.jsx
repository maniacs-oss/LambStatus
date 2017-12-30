import React from "react"
import styled from "styled-components"
import {FaServer, FaCreditCard, FaMousePointer, FaGlobe} from 'react-icons/lib/fa'

const Container = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;

  width: 100%;
  @media screen and (min-width: 480px) {
    width: 50%;
  }
`

const Icon = styled.div`
  padding-top: 10px;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  color: gray;
`

const Headline = styled.div`
  font-size: 3rem;
  margin-bottom: 5px;
`

const Description = styled.div`
  font-size: 1.8rem;
`

export const iconTypes = {
  server: 1,
  creditCard: 2,
  mousePointer: 3,
  globe: 4
};

class Highlight extends React.Component {
  render() {
    let icon;
    const iconSize = 60;
    const iconColor = 'gray';
    switch (this.props.iconType) {
      case iconTypes.server:
        icon = <FaServer size={iconSize} color={iconColor} />;
        break;
      case iconTypes.creditCard:
        icon = <FaCreditCard size={iconSize} color={iconColor} />;
        break;
      case iconTypes.mousePointer:
        icon = <FaMousePointer size={iconSize} color={iconColor} />;
        break;
      case iconTypes.globe:
        icon = <FaGlobe size={iconSize} color={iconColor} />;
        break;
      default:
        throw new Error('unknown icon type', this.props.iconType)
    }

    return (
      <Container>
        <Icon>
          {icon}
        </Icon>
        <Text>
          <Headline>
            {this.props.headline}
          </Headline>
          <Description>
            {this.props.description}
          </Description>
        </Text>
      </Container>
    )
  }
}

export default Highlight;
