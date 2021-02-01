import { combineReducers } from 'redux';


import { createReducer } from '@reduxjs/toolkit';

import {changeFilter} from './contacts-actions';
import {fetchContacts,deleteContact,addContact} from './contacts-operations';

const itemsReducer = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => (id !== payload))
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
});

const isLoadingReducer = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [fetchContacts.pending]: () => null,

    [deleteContact.rejected]: (_, { payload }) => payload,
    [deleteContact.pending]: () => null,
    
    [addContact.rejected]: (_, { payload }) => payload,
    [addContact.pending]: () => null,
})



export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
});