import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { ConfirmModal } from './components/ConfirmModal'
import data from './data.json'
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react"

import './App.css'

function App() {

  const initialProducts = useRef(
    data.map(product => ({
      ...product,
      id: uuidv4(),
      isSelected: false,
      quantity: 0,
    }))
  )

  const [products, setProducts] = useState(initialProducts.current)

  const [showModal, setShowModal] = useState(false)

  const selectedItems = products.filter(item => item.isSelected === true)

  const totalPrice = selectedItems.reduce((acc, item) => {
    return acc + (item.quantity * item.price)
  }, 0)

  const resetAll = () => {
    setProducts(initialProducts.current)
    setShowModal(false)
  }


  const convertCurrency = (amount, currency) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: currency })
  }

  const toggleSelected = (prevProducts, id) =>
    prevProducts.map(product =>
      id === product.id
        ? { ...product, isSelected: !product.isSelected, quantity: 1 }
        : product
    )

  const increaseQuantity = (prevProducts, id) =>
    prevProducts.map(product => {
      if (id === product.id) {
        return { ...product, quantity: product.quantity + 1 }
      } else {
        return product
      }
    }
    )

  const decreaseQuantity = (prevProducts, id) =>
    prevProducts.map(product => {
      if (id !== product.id) return product

      if (product.quantity <= 1) {
        return { ...product, quantity: 0, isSelected: false }
      }

      return { ...product, quantity: product.quantity - 1 }

    }
    )

  const removeItem = (prevProducts, id) => {
    return prevProducts.map(product => {
      if (id !== product.id) return product
      return { ...product, quantity: 0, isSelected: false }
    })
  }

  const handleSelected = (id) => {
    setProducts(prevProducts => toggleSelected(prevProducts, id))
  }

  const handleIncrement = (id) => {
    setProducts(prevProducts => increaseQuantity(prevProducts, id))
  }

  const handleDecrement = (id) => {
    setProducts(prevProducts => decreaseQuantity(prevProducts, id))
  }

  const handleRemove = (id) => {
    setProducts(prevProducts => removeItem(prevProducts, id))
  }

  return (
    <div className='container'>
      <h1 className='main-header'>Desserts</h1>
      <main>
        <ProductList
          products={products}
          handleSelected={handleSelected}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <Cart
          selectedItems={selectedItems}
          showModal={showModal}
          setShowModal={setShowModal}
          convertCurrency={convertCurrency}
          onReset={resetAll}
          onRemove={handleRemove}
        />
        {showModal
          ? <ConfirmModal
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            showModal={showModal}
            onReset={resetAll}
            convertCurrency={convertCurrency}
          />
          : null
        }
      </main>
    </div>
  )
}

export default App
