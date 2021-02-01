import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsList,deleteContactCart,addContactCart } from 'services/phone-book-api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchContactsList();
        } catch (error) {
            return rejectWithValue(error)
        }
    });

export const deleteContact = createAsyncThunk('contacts/Delete',
    async (id, { rejectWithValue }) => {
        try {
            return await deleteContactCart(id);
        } catch (error) {
            return rejectWithValue(error)
        }
    });

export const addContact =  createAsyncThunk('contacts/Add',
    async (newContactCart, { rejectWithValue }) => {
        try {
            return await addContactCart(newContactCart);
        } catch (error) {
            return rejectWithValue(error)
        }
    });

export const changeFilter = createAsyncThunk('contacts/ChangeFilter',
    
);