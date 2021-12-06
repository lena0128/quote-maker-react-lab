// TODO: Create action creators as defined in tests

// create functionality
export const addQuote = quote => {
     return {
         type: "ADD_QUOTE",
         quote: Object.assign({}, quote, {votes: 0})
     }
}

// delete functionality
export const removeQuote = quoteId => {
    return {
        type: "REMOVE_QUOTE",
        quoteId,
    }
}

// update functionality
export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
    type: "DOWNVOTE_QUOTE",
    quoteId
    }
}



