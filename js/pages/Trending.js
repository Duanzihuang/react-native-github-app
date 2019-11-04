import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Trending extends React.Component {
    render() {
        const { navigation } = this.props
        return <View style={styles.container}>
            <Text>Trending</Text>
            <Button onPress={() => {
                navigation.setParams({
                    theme: {
                        tintColor: 'red',
                        updateTime: new Date().getTime()
                    }
                })
            }} title="红色" />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    }
})