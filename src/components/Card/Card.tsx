import * as React from "react"
import styled from "styled-components"

interface ContainerProps {
  readonly maxWidth?: string
}
interface CardProps extends ContainerProps {
  readonly background: string
  readonly logo?: string
  readonly text?: string
}

const Container = styled.div<ContainerProps>`
  line-height: 0;
  max-width: ${(props): ContainerProps["maxWidth"] => props.maxWidth || "100%"};
  position: relative;
`
const CardImage = styled.img`
  width: 100%;
`
const CardOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  height: 2.9rem;
  position: absolute;
  width: 100%;
`
const LogoFlex = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  padding: 0.3rem;
  position: relative;
  width: 2.9rem;
`
const Logo = styled.img`
  flex: 1 1 auto;
  width: 100%;
`
const TextFlex = styled.div`
  color: white;
  display: flex;
  flex: 1 1 auto;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2rem;
`
const TextContainer = styled.span`
  margin: auto;
  flex: 1 1 auto;
`

export const Card: React.FC<CardProps> = (props: CardProps) => (
  <Container maxWidth={props.maxWidth}>
    <CardImage src={props.background}></CardImage>
    <CardOverlay>
      <LogoFlex>
        <Logo src={props.logo}></Logo>
      </LogoFlex>
      <TextFlex>
        <TextContainer>{props.text}</TextContainer>
      </TextFlex>
    </CardOverlay>
  </Container>
)
