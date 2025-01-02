import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import computer from '../img/computer.jpg'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        const isProductInCart = cart.some( item => item.id === product.id)
        return isProductInCart
    }

    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0, 15).map( product => {
                        const isProductInCart = checkProductInCart(product)
                        

                        return(
                            <li key={product.id}>
                            <img src={computer} alt={product.title} />
                            <div>
                                <strong>{product.title} - ${product.price}</strong>
                            </div>
                            <div>
                                <button style={{backgroundColor : isProductInCart? "red" : "#333"}}  onClick={() => {
                                    isProductInCart
                                    ? removeFromCart(product)
                                    : addToCart(product)
                                }}>
                                    {
                                        isProductInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }
                                    
                                </button>
                            </div>
                        </li>
                        )
                        
                    })}
            </ul>
        </main>
    )
}