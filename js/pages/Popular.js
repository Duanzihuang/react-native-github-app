import React, {Component} from 'react'
import {FlatList, View, Text, StyleSheet, RefreshControl} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import {connect} from 'react-redux'
import {SEARCH_URL, QUERY_STR} from '../utils/url'
import {onLoadPopularData} from '../store/actions/popular'

export default class Popular extends React.Component {
  constructor() {
    super()

    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React-Native', 'PHP']
  }

  _genTab = () => {
    const tabs = {}
    this.tabNames.forEach((item, index) => {
      tabs[`tabs${index}`] = {
        screen: props => <PopularTabPage {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    })

    return tabs
  }

  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this._genTab(), {
        tabBarOptions: {
          upperCaseLabel: false,
          scrollEnabled: true,
          indicatorStyle: styles.indicatorStyle,
          labelStyle: styles.labelStyle
        }
      })
    )
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    )
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props)

    const {tabLabel} = this.props
    this.storeName = tabLabel
  }

  componentDidMount() {
    // 发送请求，获取数据
    this.loadData()
  }

  // 生成url
  getFetchURL = storeName => {
    return SEARCH_URL + storeName + QUERY_STR
  }

  loadData = () => {
    const {onLoadData} = this.props

    // 获取url
    const url = this.getFetchURL(this.storeName)

    console.log(this.storeName, url)

    // 触发异步action，发送网路请求
    onLoadData(this.storeName, url)
  }

  render() {
    // 获取数据
    const {popular} = this.props

    let store = popular[this.storeName] // 动态获取每个tabLabel对应的数据
    if (!store) {
      store = {
        items: [],
        isLoading: false
      }
    }

    // 渲染每一行
    renderItem = data => {
      const item = data.item

      return (
        <View style={{marginBottom: 10}}>
          <Text style={{backgroundColor: '#ffa'}}>{JSON.stringify(item)}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={store.items}
          renderItem={data => this.renderItem(data)}
          keyExtractor={item => '' + item.id}
          refreshControl={
            <RefreshControl
              title="正在加载中..."
              titleColor="red"
              colors={['yellow']}
              refreshing={store.isLoading}
              onRefresh={() => this.loadData()}
              tintColor={'green'}
            />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popular
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadData: (storeName, url) => {
      //   dispatch(onLoadPopularData(storeName, url))
    }
  }
}

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

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
