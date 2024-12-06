import { useState } from "react"

function AddForm(props) {

  const [ nameValue, setNameValue ] = useState("")
  const [ numberValue, setNumberValue ] = useState(0)

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    // let realInputValue = event.target.value.toUpperCase() + "Trol"
    setNameValue(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumberValue(event.target.value)
  }

  const handleAddProduct = (event) => {
    event.preventDefault() // eliminar todos los comportamientos predeterminados del el evento
    // console.log("intentando agregar producto")
    // console.logs(nameValue, numberValue)

    const newProduct = {
      name: nameValue,
      price: numberValue,
      isPurchased: false
    }

    // console.log(newProduct)
    // console.log(props.allProducts)
    // console.log(props.setAllProducts)
    // añadir nuevo producto al estado

    //* forma facil
    // const clonestate = props.allProducts.slice(0)
    // clonestate.push(newProduct)
    // props.setAllProducts(clonestate)

    //* forma con spread
    // props.setAllProducts([newProduct, ...props.allProducts])

    //* forma con uso de funcion set avanzado y spread
    // props.setAllProducts( (valorActualDelEstado) => {
    //   // retorne el nuevo valor del estado
    //   return [newProduct, ...valorActualDelEstado]
    // } )

    //* igual que arriba pero en una sola linea
    props.setAllProducts((current) => [newProduct, ...current])

  }

  const [ isFormShowing, setIsFormShowing ] = useState(false)

  const handleToggleForm = () => {
    setIsFormShowing(!isFormShowing)
  }

  return (
    <div className="add-form container">

      <button onClick={handleToggleForm}>{isFormShowing ? "Ocultar formulario" : "Ver formulario"}</button>
      
      {isFormShowing ? (
        <div>
          <h2>Add Form</h2>

          <form onSubmit={handleAddProduct}>

            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
            </div>

            <div>
              <label htmlFor="price">Price: </label>
              <input type="number" name="price" value={numberValue} onChange={handleNumberChange}/>
            </div>

            <button type="submit">Add</button>

          </form>
        </div>
      ) : null}

    </div>
  )
}

export default AddForm