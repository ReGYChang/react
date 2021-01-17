import * as actionTypes from "../actions/actionTypes";
const initState = {
  squares: Array(9).fill(null),
  xIsNext: true
};

const setMark = (state, { payload }) => {
  const { position } = payload;
  const newSquares = [...state.squares];
  newSquares[position] = state.xIsNext ? "X" : "O";
  return {
    ...state,
    squares: newSquares
  };
};
const setXIsNext = (state, { payload }) => {
  const { xIsNext } = payload;
  return {
    ...state,
    xIsNext
  };
};
const actionMap = {
  [actionTypes.SET_MARK]: setMark,
  [actionTypes.SET_X_IS_NEXT]: setXIsNext
};

const reducer = (state = initState, action) => {
  const currentReducer = actionMap[action.type];
  return currentReducer ? currentReducer(state, action) : state;
};

export default reducer;
