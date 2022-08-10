import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import car from "../resources/img/car.webp"
import cup from "../resources/img/win.webp"
import finger_up from "../resources/img/finger_up.webp"
import finger_down from "../resources/img/finger_down.webp"
import StyleGameArea from "../style/StyleGameArea"

import {routeUpdate, 
        setSelectedCell, 
        gamesUpdate, 
        winCellUbdate, 
        startСellUpdate,
        startUpdate,
        winResultUpdate,
        failResultUpdate} from "../store/sliceGame"

const GameArea = () => {

    const {games, startСell, winCell, selectedCell, start, winResult, failResult} = useSelector(state => state.maze)
    const dispatch = useDispatch()
    let cell = null;

    useEffect(() => {

        cell = Math.floor(9 * Math.random()) 
        dispatch(startСellUpdate(cell))

        buildRoute()
        
    }, [games])

    const buildRows = () => {
        let newRows = []
        for (let i = 0; i < 9; i++) {

            if (i === 0) {
                newRows.push(<div key={"A"} className="number left_lane">
                <div>A</div> 
            </div>)
            }
            
            if (i === 3) {
                newRows.push(<div key={"B"} className="number left_lane">
                <div>B</div> 
            </div>)
            }
            
            if (i === 6) {
                newRows.push(<div key={"C"} className="number left_lane">
                <div>C</div> 
            </div>)
            }

            if (i === startСell) {
                newRows.push(<div key={i} className="cell"
                            onClick={() => {onClickCell(i)}}>
                    <img className="car" src={car} alt="car"/>
                </div>)
            } else {
                newRows.push(<div key={i} className="cell" 
                            onClick={() => {onClickCell(i)}}>
                            </div>)
            }

        }

        if (selectedCell === null) return newRows

        newRows = newRows.map((item) => {

            if (item.key === String(winCell)) {
                return <div key={item.key} className="cell win faded_cell">
                    {selectedCell === winCell ? <img className="finger" src={finger_up} alt="finger up"/> : null}
                </div>
            } 
            
            if (selectedCell !== winCell) {
                if (item.key === String(selectedCell)) {
                    return <div key={item.key} className="cell lose faded_cell">
                        <img className="finger" src={finger_down} alt="car"/>
                    </div>
                }  
            }

            return item
        })

        return newRows

    }

    const buildRoute = () => {

        const map = {
            0: '12',
            1: '123',
            2: '23',
            3: '012',
            4: '0123',
            5: '023',
            6: '01',
            7: '013',
            8: '03', 
        }

        const newRoute = []
        let oldCell = -1
        while (newRoute.length < 10) {

            const direction = String( Math.floor(5 * Math.random()) )            

            if (map[cell].includes(direction)) {
                
                if (direction === '0' && newRoute.at(-1) !== '2') cell = cell - 3
                if (direction === '1' && newRoute.at(-1) !== '3') cell = cell + 1
                if (direction === '2' && newRoute.at(-1) !== '0') cell = cell + 3
                if (direction === '3' && newRoute.at(-1) !== '1') cell = cell - 1
                
                if (oldCell !== cell) {
                    newRoute.push(direction)
                    oldCell = cell
                }
            }


        }

        dispatch(routeUpdate(newRoute))
        dispatch(winCellUbdate(parseInt(cell)))

    }

    const onClickCell = (indexCell) => {
        if (selectedCell !== null || !start) return

        dispatch(setSelectedCell(indexCell))
        
        if (indexCell === winCell) {
            dispatch(winResultUpdate(winResult + 1))
        } else {
            dispatch(failResultUpdate(failResult + 1))
        }
    }

    const onClickNext = () => {
        if (winResult === 15) {
            window.location.reload()
            return
        }
        dispatch(routeUpdate([]))
        dispatch(startСellUpdate(null))
        dispatch(winCellUbdate(null))
        dispatch(setSelectedCell(null))
        dispatch(startUpdate(false))
        dispatch(gamesUpdate(games + 1))
    }

    let newRows = []
    if (startСell !== null || selectedCell !== null) {
        newRows = buildRows()
    }

    if (winResult === 15) {
        return (
            <StyleGameArea>
                <div className="game_area">
                    <div className="cupgroup faded">
                        <img src={cup} alt="cup" />
                        <div className="wintext">Поздравляем! Ты молодец!</div>
                    </div>
                    <button className="btn winbtn faded"
                                        onClick={() => {onClickNext()}}
                >Начать заново</button> 
                </div>     
            </StyleGameArea>)
    }  

    return (
        <StyleGameArea>
            <div className="game_area">
                <div className="numbers">
                    <div className="left_lane"></div>
                    <div className="number">A</div>
                    <div className="number">B</div>
                    <div className="number">C</div>
                </div>
                <div className="cells_groups">
                    <div className="cells_group">
                        {newRows}
                    </div>
                </div>
                {selectedCell !== null ? <button className="btn faded"
                                        onClick={() => {onClickNext()}}
                >{winCell === selectedCell ? 'Далее' : 'Повторить'}</button> 
                : null}
            </div>
        </StyleGameArea>
        
    )
}

export default GameArea