/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// 导航组件
import { createAppContainer } from 'react-navigation'
import { AppStackNavigator } from './navigators/AppNavigators'

import AppNavigator from './navigators/AppNavigators'

// const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)
// 测试 SwitchNavigator
const AppStackNavigatorContainer = createAppContainer(AppNavigator)

// AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer)

// 测试 SwitchNavigator
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer)
