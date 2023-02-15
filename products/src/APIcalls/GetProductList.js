import { useEffect , useState} from "react";
import axios from "axios";

const BaseURL = "https://dummyjson.com/products";

export default function GetProductList (){
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(BaseURL).then((response) => {
            setProductsList(response.data);
            setLoading(false);
        }).catch((error) => {
            alert(`Error: ${error}`);
            setLoading(false);
        });
    }, []);
    return {productsList, loading};
}

