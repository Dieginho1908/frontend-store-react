import React from 'react'

export default function SingleProducto(props) {
  
  console.log(props.producto)
  if(!props)return null
  const {imagen, nombre, precio, descripcion} = props.producto;
  return (
    <div className="info-producto">
      <div className="imagen">
        <img src={`/img/${imagen}.png`} alt={nombre}/>
        <h1>{nombre}</h1>
        <h3>$ {precio}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}
