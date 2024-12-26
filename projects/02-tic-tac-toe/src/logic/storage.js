export const saveGame = ({board, turn}) =>{
    window.localStorage.setItem("board", JSON.stringify(board))
    window.localStorage.setItem("turn", turn)
}

export const resetStorageGame =() =>{
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}