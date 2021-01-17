import { MARK, SET_MARK, SET_X_IS_NEXT } from "./actionTypes";
export function mark(position) {
  return {
    type: MARK,
    payload: { position }
  };
}

export function setMark(position) {
  return {
    type: SET_MARK,
    payload: { position }
  };
}

export function setXIsNext(xIsNext) {
  return {
    type: SET_X_IS_NEXT,
    payload: { xIsNext }
  };
}
