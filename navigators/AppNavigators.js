import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

// 导入ReactNative 提供的组件
import { Button } from 'react-native'

// 导入子组件
import HomePage from '../pages/homepage'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({ navigation }) => {
            return {
                title: `${navigation.state.params.name}页面名` // 动态配置navigationOptions
            }
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: { // 静态配置
            title: 'This is Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: props => {
            const { navigation } = props
            const { state, setParams } = navigation
            const { params } = state

            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: () => (<Button title={params.mode === 'edit' ? '保存' : '编辑'}
                    onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })} />)
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: { // 静态配置
            title: 'This is Page4'
        }
    }
})