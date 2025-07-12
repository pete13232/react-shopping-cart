import "./AddCartBtn.css"
import { BaseBtn } from "./BaseBtn"
import { PlusIcon } from "./icons/PlusIcon"
import { MinusIcon } from "./icons/MinusIcon"

export const AddCartBtn = ({ product, id, handleSelected, handleIncrement, handleDecrement }) => {
    if (product.isSelected) {
        return (
            <div className="product-btn product-quantity-btn">
                <button className="minus-button" onClick={() => handleDecrement(id)}>
                    <MinusIcon />
                </button>
                <p className="product-quantity">{product.quantity}</p>
                <button className="plus-button" onClick={() => handleIncrement(id)}>
                    <PlusIcon />
                </button>
            </div>
        )

    } else {
        return (
            <BaseBtn
                onClick={() => handleSelected(id)}
                className="product-btn add-to-cart-btn"
            >
                <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                <p>Add to Cart</p>
            </BaseBtn>
        )
    }
}