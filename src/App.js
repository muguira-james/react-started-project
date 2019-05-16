import React from "react"
// import './App.scss'

import FormContainer from './components/FormContainer'

const App = () => {
  return (
    <div className="app">
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
        have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
        to prove it.
      </p>
      <p>- Captain Kirk</p>
      <div className="my-form">
        <FormContainer title="Mr Spock is cool" />
      </div>
      
    </div>
  )
}

export default App

