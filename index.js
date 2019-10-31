/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// 导航组件
import { createAppContainer } from 'react-navigation'
import { AppStackNavigator } from './navigators/AppNavigators'

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer)
