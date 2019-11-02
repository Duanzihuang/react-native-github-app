import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

// 导入字体图标库
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// 导入ReactNative 提供的组件
import { Button, Platform, ScrollView, SafeAreaView } from 'react-native'

// 导入子组件
import HomePage from '../pages/homepage'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Page5 from '../pages/page5'
import Login from '../pages/login'
import FlatListDemo from '../pages/flatListDemo'
import SectionListDemo from '../pages/sectionListDemo'

const TopTabNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'iOS'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Android'
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            tabBarLabel: 'React-Native'
        }
    }
}, {
    tabBarOptions: {
        tabStyle: { mindWidth: 50 },
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
            backgroundColor: '#678'
        },
        indicatorStyle: {
            height: 2,
            backgroundColor: 'white'
        },
        labelStyle: {
            fontSize: 13,
            marginTop: 6,
            marginBottom: 6
        }
    }
})

const BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name='ios-home' size={26} style={{ color: tintColor }} />
                )
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name='ios-people' size={26} style={{ color: tintColor }} />
                )
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name='ios-chatboxes' size={26} style={{ color: tintColor }} />
                )
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name='ios-aperture' size={26} style={{ color: tintColor }} />
                )
            }
        }
    }, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
    }
}
)

const DrawerNavigator = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({ tintColor }) => {
                return <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
            }
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: 'Page5',
            drawerIcon: ({ tintColor }) => {
                return <MaterialIcons name="move-to-inbox" size={24} style={{ color: tintColor }} />
            }
        }
    }
}, {
    initialRouteName: 'Page4',
    contentOptions: {
        activeTintColor: '#e91e63'
    },
    contentComponent: props => {
        return <ScrollView style={{ backgroundColor: '#789', flex: 1 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    }
})

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
    },
    Top: {
        screen: TopTabNavigator,
        navigationOptions: { // 静态配置
            title: 'This is TopTabNavigator'
        }
    },
    Bottom: {
        screen: BottomTabNavigator,
        navigationOptions: { // 静态配置
            title: 'This is BottomTabNavigator'
        }
    },
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: { // 静态配置
            title: 'This is DrawerNavigator'
        }
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions: {
            tabBarLabel: 'FlatListDemo'
        }
    },
    SectionListDemo: {
        screen: SectionListDemo,
        navigationOptions: {
            tabBarLabel: 'SectionListDemo'
        }
    }
})

const AppStack = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Page1: {
        screen: Page1
    }
})

const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    }
})

export default createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
}, {
    initialRouteName: 'Auth'
})