import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {contactSelectors,contactOperations} from 'redux/contacts/'
import Notification from 'components/Notification/Notification';
import Header from 'components/Header/Header';
import s from './ContactsBook.module.css';
 
export default function ContactsBook({ children }) {
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(contactOperations.fetchContacts());
    },[dispatch]);

    const bookLength = useSelector(contactSelectors.getContactListLength);
    

    if (!bookLength) return <Notification message="PhoneBook is emty" />;

    return (
        <>
            <Header title={'Contacts'} />
                <div className={s.contactsContainer}>
                    {children}
                </div>
        </>
    )
}
