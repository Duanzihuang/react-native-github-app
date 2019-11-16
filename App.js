/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {createAppContainer} from 'react-navigation'
import AppNavigators from './js/navigators/AppNavigators'
import {Provider} from 'react-redux'
import store from './js/store'

const AppNavigator = createAppContainer(AppNavigators)

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  )
}

export default App
