import {combineReducers,configureStore} from '@reduxjs/toolkit'
import BudjetReducer from './BudgetSlice'

const reducer=combineReducers({
    Budget:BudjetReducer
}) 

const store=configureStore({reducer})
export default store;