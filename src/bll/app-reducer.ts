
type ActionTypes = ReturnType<typeof newAC>

type InitialStateType = typeof initialState

const initialState = {

}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
      case "NEW":
          return {state}

      default:
          return state
  }
}

export const newAC = () => {
  return {
      type: 'NEW'
  }
}