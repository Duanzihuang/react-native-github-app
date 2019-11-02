import React from 'react'
import { View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'

const CITY_NAMES = ['北京', '上海', '广州', '深圳', '珠海', '东莞', '武汉', '长沙', '南京', '南昌', '乌鲁木齐', '苏州', '杭州']

export default class FlatListDemo extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }
    _renderItem = item => {
        return <View style={styles.item} key={item}>
            <Text style={styles.text}>{item}</Text>
        </View>
    }

    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            })
        }

        setTimeout(() => {
            let dataArray = []
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES)
            }

            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000);
    }

    _genIndicator = () => {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator style={styles.indicator} size="large" animating={true} color='orange' />
            <Text>上拉加载更多</Text>
        </View>
    }

    render() {
        return <View style={styles.container}>
            <FlatList data={this.state.dataArray}
                renderItem={({ item }) => this._renderItem(item)}
                // refreshing={this.state.isLoading}
                // onRefresh={() => this.loadData()}
                refreshControl={
                    <RefreshControl
                        title="Loading..."
                        titleColor='red'
                        colors={['red']}
                        tintColor='orange'
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.loadData(true)} />
                }
                ListFooterComponent={() => this._genIndicator()}
                onEndReached={() => this.loadData()}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#169',
        height: 200,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        margin: 10
    }
})