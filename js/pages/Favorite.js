import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Favorite extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>Favorite</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})