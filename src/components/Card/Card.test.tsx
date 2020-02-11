import React from "react"
import renderer from "react-test-renderer"

import { Card } from "./Card"

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Card
        maxWidth="100%"
        background="bg.jpg"
        text="Home and Away"
        logo="logo.png"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it("renders with text", () => {
  const instance = renderer.create(
    <Card
      maxWidth="100%"
      background="bg.jpg"
      text="Home and Away"
      logo="logo.png"
    />
  ).root
  const textContainer = instance.findAllByType("span")[0]

  expect(textContainer.children).toEqual(["Home and Away"])
})

it("renders without text", () => {
  const instance = renderer.create(
    <Card maxWidth="100%" background="bg.jpg" logo="logo.png" />
  ).root
  const textContainer = instance.findAllByType("span")[0]

  expect(textContainer.children).toEqual([])
})
