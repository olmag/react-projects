import './GameWindow.css'
import Game from "../Game/Game";
import Confetti from 'react-confetti'
import {useState} from 'react'
import {useEffect} from 'react'

function GameWindow() {

    const [isWin, setIsWin] = useState(false)
    const [score, setScore] = useState(0)
    
    function createNewCellsArr(num = 10) {  

        const createCellsArr = [];
        for (let i = 0; i < num; i++){
            createCellsArr.push(
                {
                    id: i,
                    number: createRandomNubmer(),
                    isActive: false,
                }
            )
        }
        return createCellsArr;
    }
    
    function createRandomNubmer(){
        return Math.ceil(Math.random() * 6)
    }

    const [cells, setCells] = useState(createNewCellsArr())


    function onClickCellsRoll(){
        setCells((prevCells) => {
            return prevCells.map((el) => {
                if(el.isActive){
                    return el
                } else {
                    return(
                        {
                        ...el,
                        number: createRandomNubmer(),
                        }
                    )
                }
            })
        })
        setScore((score) => {
                return score + 1
        })
    }

    function onClickLockCell(id){
        setCells((prevCells) => {
            return prevCells.map((el) => {
                if(el.id === Number(id)){
                    return (
                        {
                            ...el,
                            isActive: !el.isActive,
                        }
                    );
                } else {
                    return el
                }
            })
        });
    }

    const isLock = cells.every((el)=>{
        return el.isActive === true;
    });

    const isNum = cells.every((el)=>{
        return el.number === cells[0].number;
    });

    useEffect(()=> {
        if(isNum && isLock){
            setIsWin(true)
        }
    }, [isWin,  isNum, isLock])

    function onClickCreateNewGame() {
        if(cells.length === 10){
            setCells(createNewCellsArr(10))
        } else {
            setCells(createNewCellsArr(20))
        }
        setIsWin(false)
        setScore(0)
    }

    function onClickChengeMode(){
        if(cells.length === 10){
            setCells(createNewCellsArr(20))
        } else {
            setCells(createNewCellsArr(10))
        }
    }

    const winWindow = (
        <>
        <Confetti/> 
        <div className="winParagraph">
            <h2>You won</h2>
            {score > 1 ? <><div>Your result is {score} сlicks </div></> : null}
            <button className="button" onClick={onClickCreateNewGame}> New Game </button>  
        </div>
        </>
    );

    return(
        <>
            {isWin ? winWindow : <Game score={score} cells={cells} onClickLockCell={onClickLockCell} onClickCellsRoll={onClickCellsRoll} onClickChengeMode={onClickChengeMode} />}
        </> 
    )
}

export default GameWindow;