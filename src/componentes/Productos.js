import React, { Component } from 'react';
import Producto from './Producto'
import './Productos.css';

class Productos extends Component {
    render() {
        return (
            <div className="productos">
                <h2>Nuestros productos</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto =>(
                        <Producto 
                        key={producto}
                        producto={this.props.productos[producto]}
                        />
                    )
                    )}
                </ul>
            </div>
        )
    }
}

export default Productos;