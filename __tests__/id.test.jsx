// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Entry from '../pages/[id]'
// brings in the Entry function

describe('Entry', () => {
  it('renders the details of a person', () => {
    render(<Entry />)

    const heading = screen.getByRole('link', {
      name: /Home/i,
    })

    expect(heading).toBeInTheDocument()
  })
})  
/*
Unfortunately, this did not work
  const testPerson = {
    "name": "Sir Gregor",
    "email": "Greg@cleganeBowl.com",
    "phone": "000-000-0002",
    "birthdate": "04/01/1921",
    "id": 10,
    "aka": "The Mountain"
    
  }

 * pulled from
 * https://testing-library.com/docs/angular-testing-library/api/#providers
 
    await render(<Entry />, {
     providers: [
    testPerson,
    {
    "name": "Sir Gregor",
    "email": "Greg@cleganeBowl.com",
    "phone": "000-000-0002",
    "birthdate": "04/01/1921",
    "id": 10,
    "aka": "The Mountain"
    
    },
  ],
})
*/
