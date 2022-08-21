import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './1-actions'

export const bugAdded = (description) => {

    return {
        type: BUG_ADDED,
        payload:{
            description
        }
    }
} 


export const bugRemoved = (id) => {

    return {
        type: BUG_REMOVED,
        payload:{
            id
        }
    }
} 


export const bugResolved = (id) => {

    return {
        type: BUG_RESOLVED,
        payload:{
            id
        }
    }
} 