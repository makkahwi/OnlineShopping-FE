import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  basket: []
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'setBasket':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
