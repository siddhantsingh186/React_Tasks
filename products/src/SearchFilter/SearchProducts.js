import { useState } from "react";
import "./SearchProducts.css";
const SearchProducts = ({products, setFilteredProducts}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const searchTextInput = event.target.value.toLowerCase();
        setSearchTerm(searchTextInput);

        const filteredProducts = products['products'].filter((product) => {
            return product.title.toLowerCase().includes(searchTextInput);
        });

        setFilteredProducts(filteredProducts);
        
    }

    return (
        <div className="SearchBox">
            <input type="text" placeholder="Search with title..." value={searchTerm} onChange={handleSearch} />
        </div>
    );
};

export default SearchProducts;