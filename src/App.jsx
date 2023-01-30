import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Users from './components/Users'


const App = () => {
  return (
    <Provider store={store}>
       <Users/>
    </Provider>
   
  )
}

export default App