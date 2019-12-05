let nextId = 0

export const addSearchQuery= text =>({
    type: 'ADD_SEARCH',
    id: nextId++,
    text
})