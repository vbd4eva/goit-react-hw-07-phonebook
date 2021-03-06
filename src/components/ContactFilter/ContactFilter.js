import {useSelector, useDispatch} from 'react-redux';

import {contactActions,contactSelectors} from 'redux/contacts';
import s from './ContactFilter.module.css';

export default function ContactFilter() {
    
    const filterValue = useSelector(contactSelectors.getFilterValue);
    const dispatch = useDispatch();
    
    return (
         <label className={s.label}>
            Find contacts by name
            <input
                className={s.input}
                 type="text"
                 name="filter"
                 value={filterValue}
                 onChange={(e)=>dispatch(contactActions.changeFilter(e.currentTarget.value))}
             />
         </label>
    )
}

