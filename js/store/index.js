import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

// 导入根reducer
import rootReducer from './reducers'

import { middleware } from '../navigators/AppNavigators'

// 中间件
const middlewares = [
    middleware,
    thunk
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)

// 导出
export default store

