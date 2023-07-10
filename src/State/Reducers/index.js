import { combineReducers } from 'redux';
import GoalReducer from './GoalReducer';

export default combineReducers({
    goal: GoalReducer
})