import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './scences/App'
import configureStore from './configureStore'

const store = configureStore()

const blank = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('blank', () => blank)