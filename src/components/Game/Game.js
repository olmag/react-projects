import Cell from "../ Сell/Сell";

function Game({score, onClickCellsRoll, onClickChengeMode, onClickLockCell, cells}) {
    return(
        <div className="gameWindow">
            <h3>
                Tenzies
            </h3>
            <p>
                Roll untiil all dice are the same. Cklick each die to freeze at it`s current value between rolls.
            </p>
            <div className="cellsWindow" >
                {cells.map((el) => {
                    return(
                        <Cell {...el} key={el.id} onClick={() => onClickLockCell(el.id)}/>
                    )
                })}
            </div>
            {score > 0 ? <><div>Your result is {score} сlicks </div></> : null}
            <button 
                className="button" 
                onClick={onClickCellsRoll}
            >
                Roll
            </button> 
            <button 
                className="button"
                onClick={onClickChengeMode}
            >
            Chenge Mode
            </button>
        </div>
    )
}

export default Game