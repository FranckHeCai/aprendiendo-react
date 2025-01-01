import './Products.css'
import { AddToCartIcon } from './Icons'
import computer from '../img/computer.jpg'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0, 15).map( product =>(
                        <li key={product.id}>
                            <img src={computer} alt={product.title} />
                            <div>
                                <strong>{product.title} - ${product.price}</strong>
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
                                    Add to Cart
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}