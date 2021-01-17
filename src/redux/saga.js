import { takeEvery, put, select } from "redux-saga/effects";
import { setMark, setXIsNext } from "../actions/actions";
import { calculateWinner } from "../utils/utils";

function* mark({ payload }) {
  const xIsNext = yield select(state => state.xIsNext);
  const squares = yield select(state => state.squares);

  if (squares[payload.position] || calculateWinner(squares)) return;

  yield put(setMark(payload.position));
  yield put(setXIsNext(!xIsNext));
}

function* main() {
  yield takeEvery("MARK", mark);
}
export default main;
