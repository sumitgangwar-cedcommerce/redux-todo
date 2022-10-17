let initialState = { complete: [], incomplete: [] };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, incomplete: [action.payload  ,...state.incomplete] };
    case "DELETE_TODO_COMPLETED":
      return {
        ...state,
        complete: [...state.complete.filter((item , i) => i !== action.payload)],
      };
    case "DELETE_TODO_INCOMPLETED":
      return {
        ...state,
        incomplete: [
          ...state.incomplete.filter((item , i) => i !== action.payload),
        ],
      };
    case "EDIT_TODO_COMPLETED":
      state.complete[action.payload.index] = action.payload.data;
      return { ...state };
    case "EDIT_TODO_INCOMPLETED":
      state.incomplete[action.payload.index] = action.payload.data;
      return { ...state };
    case "MOVE_TO_COMPLETED_TODO":
      return {
        ...state,
        incomplete: [
          ...state.incomplete.filter((item , i) => i !== action.payload),
        ],
        complete: [...state.complete, state.incomplete[action.payload]],
      };
    case "MOVE_TO_INCOMPLETED_TODO":
      return {
        ...state,
        complete: [...state.complete.filter((item , i) => i !== action.payload)],
        incomplete: [...state.incomplete, state.complete[action.payload]],
      };
    default:
      return state;
  }
};
