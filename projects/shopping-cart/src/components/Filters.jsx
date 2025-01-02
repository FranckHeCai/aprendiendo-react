import "./Filters.css"
import { useFilters } from "../hooks/useFilters"
export function Filters () {
    const {filters, setFilters} = useFilters()

    const handleChangePrice = (e) =>{
        const price = e.target.value
        setFilters(prev => ({
            ...prev,
            minPrice : price
        }) )
    }

    const handleChangeCategory = (e) =>{
        setFilters(prev => ({
            ...prev,
            category : e.target.value
        }) )
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Filter price</label>
                <input 
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handleChangePrice}
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}$</span>
            </div>
            <div>
                <label htmlFor="category">Categories</label>
                    <select id="category" onChange={handleChangeCategory}>
                        <option defaultValue="all">All</option>
                        <option value="laptops">Laptops</option>
                        <option value="smartphones">Cellphones</option>
                    </select>
            </div>
        </section>
    )
}