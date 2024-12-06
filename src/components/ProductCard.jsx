function ProductCard(props) {

  const {name, price, isPurchased} = props.eachProduct

  const handleClickBuy = () => {

    props.setAllProducts((allProducts) => {

      const cloneState = [...allProducts]
      cloneState[props.index].isPurchased = !cloneState[props.index].isPurchased

      return cloneState
      // return nuevoEstado
    })

  }
  
  return (
    <div className="product-card" >
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleClickBuy}>Buy</button>
    </div>
  );
}

export default ProductCard;
