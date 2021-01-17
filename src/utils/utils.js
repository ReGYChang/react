import _ from 'lodash'
export function calculateWinner(squares) {
const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  const winLine = _.find(lines, ([a,b,c]) => 
         squares[a] !== null && 
         squares[a] === squares[b] && 
         squares[a] === squares[c]
  )
  if (!winLine) return null
  return squares[winLine[0]]
}