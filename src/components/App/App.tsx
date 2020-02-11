import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { Card } from "../Card/Card"
import * as tile from "../../../static/tile.jpg"
import * as logo from "../../../static/logo.png"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 19px;

    @media only screen and
    (min-device-width : 320px) and (max-device-width : 667px) and (orientation : portrait),
    (device-aspect-ratio: 2) and (max-device-width: 420px) and (orientation: portrait),
    (-webkit-device-pixel-ratio: 2) and (max-device-width: 420px) and (orientation: portrait) {
      font-size: 38px;
    }

    @media only screen and
    (device-aspect-ratio: 3) and (orientation: portrait),
    (-webkit-device-pixel-ratio: 3) and (orientation: portrait),
    (device-aspect-ratio: 4) and (orientation: portrait),
    (-webkit-device-pixel-ratio: 4) and (orientation: portrait) {
      font-size: 42px;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media (max-device-width: 420px), (max-width: 420px) {
    display: block;
  }
`
const Col2 = styled.div`
  flex: 0 0 auto;
  width: 49%;
  @media (max-device-width: 420px), (max-width: 420px) {
    margin: 1rem 0;
    width: 100%;
  }
`
const Col3 = styled.div`
  flex: 0 0 auto;
  width: 32%;
  @media (max-width: 420px), (max-device-width: 420px) {
    margin: 1rem 0;
    width: 100%;
  }
`

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <FlexContainer>
      <Col3>
        <Card
          background={tile.default}
          logo={logo.default}
          text="Home and Away"
          maxWidth="100%"
        ></Card>
      </Col3>
      <Col3>
        <Card
          background={tile.default}
          logo={logo.default}
          text="Home and Away"
          maxWidth="100%"
        ></Card>
      </Col3>
      <Col3>
        <Card
          background={tile.default}
          logo={logo.default}
          text="Home and Away"
          maxWidth="100%"
        ></Card>
      </Col3>
    </FlexContainer>

    <FlexContainer>
      <Col2>
        <Card
          background={tile.default}
          logo={logo.default}
          text="Home and Away"
          maxWidth="100%"
        ></Card>
      </Col2>
      <Col2>
        <Card
          background={tile.default}
          logo={logo.default}
          text="Home and Away"
          maxWidth="100%"
        ></Card>
      </Col2>
    </FlexContainer>
  </React.Fragment>
)
