import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../pages/cartContext'

export default function Product({ id, name, price }) {

  const { items, addToCart, removeFromCart } = useContext(CartContext)


  const [exists, setExists] = useState(false);

  useEffect(() => {
    const inCart = items.find((item) => item.id === id);

    if (inCart) {
      setExists(true);
    } else {
      setExists(false);
    }
  }, [items, id]);


  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      {
        exists
          ? <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
          : <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
      }
    </div>
  )
}