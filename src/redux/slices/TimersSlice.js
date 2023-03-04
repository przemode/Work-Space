import { createSlice } from '@reduxjs/toolkit'

export const timersSlice = createSlice({
    name: 'timers',
    initialState: {
        timers: {},
    },

    reducers: {
        addConfiguratorData: {
            reducer(state, action) {
                state.timers[action.payload.key] = action.payload.value
            },
            prepare(key, value) {
                return {
                    payload: {
                        key,
                        value,
                    },
                }
            },
        },
    },
})

export const {
    addConfiguratorData,
} = timersSlice.actions

export default timersSlice.reducer