import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

export default class Popular extends React.Component {
    constructor() {
        super()

        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React-Native', 'PHP']
    }

    _genTab = () => {
        const tabs = {}
        this.tabNames.forEach((item, index) => {
            tabs[`tabs${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title: item
                }
            }
        })

        return tabs
    }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this._genTab(), {
            tabBarOptions: {
                upperCaseLabel: false,
                scrollEnabled: true,
                indicatorStyle: styles.indicatorStyle,
                labelStyle: styles.labelStyle
            }
        }))
        return <View style={styles.container}>
            <TabNavigator />
        </View>
    }
}

class PopularTab extends Component {
    render() {
        const { tabLabel } = this.props

        return <View>
            <Text>{tabLabel}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    tabStyle: {
        minWidth: 50
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
})