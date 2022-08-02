import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    route: [],
    startСell: null,
    winCell: null,
    selectedCell: null,
    games: 1,
    start: false,
    winResult: 0,
    failResult: 0
}

const mazeSlice = createSlice({
    name: 'maze',
    initialState,
    reducers: {
        routeUpdate: (state, action) => {
            state.route = action.payload
        },
        startСellUpdate: (state, action) => {
            state.startСell = action.payload
        },
        startUpdate: (state, action) => {
            state.start = action.payload
        },
        gamesUpdate: (state, action) => {
            state.games = action.payload
        },
        winCellUbdate: (state, action) => {
            state.winCell = action.payload
        },
        setSelectedCell: (state, action) => {
            state.selectedCell = action.payload
        },
        winResultUpdate: (state, action) => {
            state.winResult = action.payload
        },
        failResultUpdate: (state, action) => {
            state.failResult = action.payload
        },
    }
});

const {actions, reducer} = mazeSlice;

export default reducer;

export const {
    routeUpdate,
    gamesUpdate,
    startСellUpdate,
    winCellUbdate,
    setSelectedCell,
    startUpdate,
    winResultUpdate,
    failResultUpdate
} = actions;