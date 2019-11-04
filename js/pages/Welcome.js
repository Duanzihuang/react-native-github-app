import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// 导入 NavigatorUtil
import NavigatorUtil from '../navigators/NavigatorUtil'

export default class Welcome extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            NavigatorUtil.goToHomePage({ navigation: this.props.navigation })
        }, 2000);
    }

    render() {
        return <View style={styles.container}>
            <Text>Welcome</Text>
            <Text>Welcome</Text>
            <Text>Welcome</Text>
            <Text>Welcome</Text>
            <Text>Welcome</Text>
            <Text>Welcome</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
    }
})