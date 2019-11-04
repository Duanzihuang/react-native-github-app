import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class My extends React.Component {
    render() {
        const { navigation } = this.props
        return <View style={styles.container}>
            <Text>My</Text>
            <Button onPress={() => {
                navigation.setParams({
                    theme: {
                        tintColor: 'purple',
                        updateTime: new Date().getTime()
                    }
                })
            }} title="紫色" />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    }
})