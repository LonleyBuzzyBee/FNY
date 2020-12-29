import React from 'react'

const Data = [
  {
    title: 'user',
    option1: 'cart',
    option2: 'sign out'
  },
  {
    title: 'admin',
    option1: 'create',
    option2: 'sign out'
  },
  {
    title: 'sign in',
    option1: 'sign in',
    option2: 'sign up',

  }
]

const Accordion = () => {
  return (
    <div>
      {Data.map((item, index) => {
        return (
          <>
            <h3>{item.title}</h3>
            <p>{item.option1}</p>
            <p>{item.option2}</p>
          </>
        )
      })}
    </div>
  )
}
export default Accordion;