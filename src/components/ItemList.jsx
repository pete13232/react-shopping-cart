import "./ItemList.css"

export const ItemList = ({ id, name, price, quantity, image, convertCurrency, onRemove, isModal }) => {

    return (isModal
        ? <>
            <div className="order-detail-container">
                <img src={image.thumbnail} alt="" />
                <div>
                    <h2>{name}</h2>
                    <div className="order-detail">
                        <span className="item-quantity"><b>{quantity}x</b></span>
                        <span>@ {convertCurrency(price, "USD")}</span>
                    </div>
                </div>
            </div>
            <span><b>
                {convertCurrency((price * quantity), "USD")}
            </b>
            </span>
        </>
        :
        <>
            <div>
                <h2>{name}</h2>
                <div className="order-detail">
                    <span className="item-quantity"><b>{quantity}x</b></span>
                    <span>@ {convertCurrency(price, "USD")}</span>
                    <span><b>
                        {convertCurrency((price * quantity), "USD")}
                    </b>
                    </span>
                </div>
            </div>
            <button className="remove-item-btn" onClick={() => onRemove(id)}>
                <img src="/assets/images/icon-remove-item.svg" alt="" />
            </button>
        </>)
}