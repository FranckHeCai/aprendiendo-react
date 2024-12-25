import { Square } from "./Square";
export const Board = ({board, updateBoard}) =>{
    return(
        <section className="game">
        {
          board.map((text , index)=>{
            return(
              <Square  
                key= {index}
                index = {index}
                updateBoard={updateBoard}
              >
                {text}
              </Square>
            );
          })
        }
      </section>
    )
}