import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid';











//store creation

const store = createStore( 
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    }) 
);


const demoState = {
    expenses: [{
        id: 'asdfasdf',
        description: 'jan rent',
        note: 'final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text:'rent',
        sortBy: 'amount', // date/amount
        startDate: undefined,
        endDate: undefined
    }
};