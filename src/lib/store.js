import { configureStore, createSlice } from "@reduxjs/toolkit"

// Our new error field is configured here
const AppStateSlice = createSlice({
	name: "appState",
	initialState: "",
	reducers: {
		updateAppState: (state, action) => {
			return {
				...state,
				isError: action.payload,
			}
		},
	},
})

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server.
 */

const defaultTasks = [
	{ id: "1", title: "something", state: "TASK_INBOX" },
	{ id: "2", title: "something more", state: "TASK_INBOX" },
	{ id: "3", title: "something else", state: "TASK_INBOX" },
	{ id: "4", title: "something again", state: "TASK_INBOX" },
]

// The store is created here.

const TasksSlice = createSlice({
	name: "tasks",
	initialState: defaultTasks,
	reducers: {
		updateTaskState: (state, action) => {
			const { id, newTaskState } = action.payload
			const task = state.findIndex((task) => task.id === id)
			if (task >= 0) {
				state[task].state = newTaskState
			}
		},
	},
})

// The actions contained in the slice are exported for usage in our components

export const { updateTaskState } = TasksSlice.actions

// The actions contained in the new slice are exported to be used in our components
export const { updateAppState } = AppStateSlice.actions

// Our app's store configuration goes here.

const store = configureStore({
	reducer: {
		tasks: TasksSlice.reducer,
		isError: AppStateSlice.reducer,
	},
})

export default store
