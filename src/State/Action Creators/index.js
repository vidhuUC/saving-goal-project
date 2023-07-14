export const addGoal = (goal) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_GOAL',
            payload: goal
        })
    }
}