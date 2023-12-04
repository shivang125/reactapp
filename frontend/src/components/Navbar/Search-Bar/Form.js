import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../Context/SearchContext';
import './Form.css';

const Form = () => {
    const [ searchInput, setSearchInput] = useState('')
    const searchContext = useContext(SearchContext)
    const navigate = useNavigate()

    const handelChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handelFormSubmit = (e) => {  
        e.preventDefault()
        searchContext.setSearchQuery(searchInput)
        navigate('/search')
    }

    return ( 
            <form className="search__form" onSubmit={handelFormSubmit}>
                <input type="text"  placeholder='Search for products' className="search__form__input" value={searchInput} style={{bordercolor: '#FFE26E'}} onChange={handelChange} required/>
                <button className="search__form__button" type='submit'>
                    <SearchIcon fontSize='medium'/>
                </button>
            </form>
     );
}
 
export default Form;