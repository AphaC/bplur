import {
  ASYNC_INCREMENT,
  ASYNC_DECREMENT,
} from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const asyncDec = createAction(ASYNC_DECREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
