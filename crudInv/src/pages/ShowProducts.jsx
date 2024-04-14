import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios.config';
import Table from '../components/Table/Table';

const ShowProducts = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axiosInstance.get('/')                   // TODO aca vamos a hacer un get
            .then(r => {
                if( r.status === 200){
                    setItems(r.data)
                }else{
                    throw new Error(`[${r.status}]ERROR en la solicitud`)
                }
            })
            .catch(err => console.log(err))
    }, []);

    const editItem = (id, data) => {
        console.log('editando producto');
        axiosInstance.put(`/${id}`, data)            // TODO aca vamos a hacer un put
            .then(r => {
                if(r.status === 200){
                    const updateItems = items.map(item => {
                        if (item.id === r.data.id) {
                            return r.data
                        }
                        return item
                    })
                    setItems(updateItems)
                }else{
                    throw new Error(`[ERROR ${r.status}] Error en la solicitud`)
                }

            })
            .catch(err => console.log(err))
        
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}> Productos en inventario </h1>

            <div className='container mt-3'>
                {
                    items.length > 0 ? 
                        <Table items={items} editItem={editItem}/>
                    :
                    <h2 style={{textAlign:'center'}}> No hay productos en el sistema </h2>
                }
            </div>
        </div>
    );
}

export default ShowProducts;
