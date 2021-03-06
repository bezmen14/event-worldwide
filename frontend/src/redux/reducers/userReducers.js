import {
    ADD_USER,
    DELETE_USER,
} from '../types/userTypes'

import initState from '../initState'

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, user: action.payload }
        case DELETE_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default userReducer
