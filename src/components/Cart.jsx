import { ItemList } from "./ItemList"
import { BaseBtn } from "./BaseBtn"
import "./Cart.css"

export const Cart = ({ selectedItems, showModal, setShowModal, onRemove, convertCurrency }) => {


    const totalQuantity = selectedItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    const totalPrice = selectedItems.reduce((acc, item) => {
        return acc + (item.quantity * item.price)
    }, 0)


    return <section className="cart-container">
        <h3>Your Cart ({totalQuantity})</h3>
        {selectedItems.length > 0
            ? <>
                <ul className="cart-order">
                    {selectedItems.map(({ id, name, price, quantity, image }) =>
                        <li key={id} className="cart-order-item">
                            <ItemList
                                id={id}
                                name={name}
                                price={price}
                                quantity={quantity}
                                image={image}
                                convertCurrency={convertCurrency}
                                isModal={false}
                                onRemove={onRemove} />
                        </li>
                    )}
                </ul>
                <div className="order-total">
                    <span>Order Total</span>
                    <span className="total">{convertCurrency(totalPrice, "USD")}</span>
                </div>
                <div className="carbon-badge">
                    <span>
                        <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
                    </span>
                    <span>
                        This is a <b>carbon-neutral</b> delivery
                    </span>
                </div>
                <BaseBtn className="confirm-order-btn" onClick={() => setShowModal(!showModal)}>
                    Confirm Order
                </BaseBtn>
            </>
            : <>
                <img className="cart-empty-img" src="/assets/images/illustration-empty-cart.svg"></img>
                <p>Your added items will appear here</p>
            </>
        }
    </section>
}
