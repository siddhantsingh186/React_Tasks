
import "./SearchProducts.css";
const SearchProducts = ({setSearch}) => {

    const handleSearch = (event) => {
        const searchTextInput = event.target.value.toLowerCase();
        setSearch(searchTextInput);    
    }

    return (
        <div className="SearchBox">
            <input type="text" placeholder="Search with title..." onChange={handleSearch} />
        </div>
    );
};

export default SearchProducts;