import {useDispatch, useSelector} from "react-redux"
import { setTitleFilter, setAuthorFilter, setFavoriteFilter,  resetFilter }  from "../../redux/slices/filterSlices"


const Filter = () => {

    const dispatch = useDispatch()

    const titleFilter = useSelector((state) => state.filter.value)
    const authorFilter = useSelector((state) => state.filter.value)

    function hundleClearTitle() {
        dispatch(resetFilter())
    }

    function hundleFilterChange(event) {
        dispatch(setTitleFilter(event.target.value))
    }

     function hundleAuthorChange(event) {
        dispatch(setAuthorFilter(event.target.value))
     }
    
    
    function hundlerFavoriteFilter() {
        dispatch(setFavoriteFilter())
    }
    return (
        <div className="app-block filter">
            <div className="filter-group">
                <input id="title" type='text' placeholder="filter by title" value={titleFilter} onChange={hundleFilterChange} />
                
               
            </div>
            <div className="filter-group">
                <input id='author' type='text' placeholder="filter by author" value={authorFilter} onChange={hundleAuthorChange} />
                
               
            </div>
            <button onClick={hundleClearTitle}>Clear filter</button>
            
            <div className="filter-group">
            <h4>Only Favorite: </h4>   
            <input id="isFavorite" type="checkbox" onClick={hundlerFavoriteFilter}/>
            </div>
        </div>
    )
}


export default Filter