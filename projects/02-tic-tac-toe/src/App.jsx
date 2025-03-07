import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { Board } from "./components/board"
import { TURNS } from "./constants"
import { WinnerModal } from "./components/WinnerModal"
import { checkWinner, checkEndGame } from "./logic/board"
import { saveGame, resetStorageGame } from "./logic/storage"

function App() {
    const [board, setBoard] = useState(() => {
    const localStorageBoard = window.localStorage.getItem("board")
    return localStorageBoard? JSON.parse(localStorageBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() =>{
    const localStorageTurn = window.localStorage.getItem("turn")
    return localStorageTurn ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] =  turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)

    saveGame({board : newBoard, turn: newTurn})
    
    if(newWinner) {
      setWinner(newWinner)
      confetti()
    } else if(checkEndGame(newBoard)){
      setWinner(false)
      console.log('empate')
    }
  }

  const resetGame = () =>{
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
    resetStorageGame()
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard}/>
      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
      </section>
     <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
