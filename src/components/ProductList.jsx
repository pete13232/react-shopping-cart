import { AddCartBtn } from "./AddCartBtn";
import "./ProductList.css"

export const ProductList = ({ products, handleSelected, handleIncrement, handleDecrement }) => {

    console.log(products)
    return <section className="product-list-container">
        {
            products.map(product => {
                const { name, category, price, image, id, isSelected } = product

                return (
                    <article className="product" key={id}>
                        <div className="picture-with-btn-container">
                            <picture>
                                <source media="(min-width: 768px)" srcSet={image.tablet} />
                                <source media="(min-width: 1440px)" srcSet={image.desktop} />
                                <img className={`product-img ${isSelected ? "active" : null}`} src={image.mobile} alt="" />
                            </picture>
                            <AddCartBtn product={product} id={id} handleSelected={handleSelected} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                        </div>
                        <p className="product-category">{category}</p>
                        <h2 className="product-name">{name}</h2>
                        <p className="product-price">
                            {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </p>
                    </article>
                )
            })
        }
    </section >
}