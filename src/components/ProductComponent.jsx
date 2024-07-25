import React, { useState } from 'react'
import Modal from './ModalComponent';
import { useProductStore } from '../store/products';

const ProductComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [json, setJson] = useState({});
    const [modalTitle, setModalTitle] = useState("Create Product");

    const openModal = () => {
        setJson({})
        setIsModalOpen(true)
        setModalTitle("Create Product")
    }
    const closeModal = () => setIsModalOpen(false);
    const { products, removeFromList } = useProductStore()
    const openToModal = (json)=>{
        console.log('holaaa')
        console.log(json)
        setJson(json)
        setIsModalOpen(true)
        setModalTitle("Edit Product")
    }
    return (
        <div className='container mx-auto mt-14'>




            <div className='mb-4'>
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl ">Products management</h2>
                <div className="App">
                    <button
                        onClick={openModal}
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        New
                    </button>

                    <Modal isOpen={isModalOpen} onClose={closeModal} getData={json} getTitle={modalTitle}/>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(p => (
                                <tr 
                                key={p.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {p.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {p.color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {p.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {`$${p.price}`}
                                    </td>
                                    <td className="px-6 py-4">
                                        {`$${p.quantity}`}
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <button 
                                        onClick={()=>openToModal(p)}
                                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                        <button  
                                        onClick={()=>removeFromList(p.id)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductComponent
