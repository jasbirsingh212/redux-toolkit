import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './1-actions'

const initialState =[]; 

const  reducer = (state=initialState, action) => { 

    switch (action.type) {
        case BUG_ADDED:
            return [...state, { id: state.length + 1, description: action.payload.description, resolved: false }];    
        case BUG_REMOVED:
            
            return state.filter((bug) => bug.id !== action.payload.id )
        case BUG_RESOLVED:
           return state.map((bug) => bug.id === action.payload.id ? {...bug, resolved: true } : bug)
    
        default: state
            
    }
}

export default reducer;