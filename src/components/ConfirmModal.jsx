import "./ConfirmModal.css"
import { ItemList } from "./ItemList"
import { BaseBtn } from "./BaseBtn"

export const ConfirmModal = ({ selectedItems, onReset, convertCurrency, totalPrice }) => {
    return (
        <div className="modal-backdrop">
            <section className="modal-container">
                <div>
                    <img className="confirm-img" src="/assets/images/icon-order-confirmed.svg" alt="" />
                    <h3>Order Confirmed</h3>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div className="modal-body">
                    <ul>
                        {selectedItems.map(({ id, name, price, quantity, image }) =>
                            <li className="cart-order-item" key={id}>
                                <ItemList
                                    id={id}
                                    name={name}
                                    price={price}
                                    quantity={quantity}
                                    image={image}
                                    convertCurrency={convertCurrency}
                                    isModal={true}
                                />
                            </li>
                        )}
                    </ul>
                    <div className="modal-total-container">
                        <span>Order Total</span>
                        <span className="modal-total">{convertCurrency(totalPrice, "USD")}</span>
                    </div>
                </div>


                <BaseBtn className="confirm-order-btn" onClick={() => onReset()}>
                    Start New Order
                </BaseBtn>
            </section>
        </div>
    )
}