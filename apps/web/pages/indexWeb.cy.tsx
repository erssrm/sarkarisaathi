import React from 'react'
import Web from './index'

describe('<Web />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Web />)
  })
})