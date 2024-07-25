import React, { useEffect, useState } from 'react';
import { useProductStore } from '../store/products';

const Modal = ({ isOpen, onClose, getData,getTitle }) => {
    if (!isOpen) return null;
    
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        category: '',
        price: '',
        color: '',
        quantity: ''
    });

    const { addToList } = useProductStore();

    useEffect(() => {
        if (Object.keys(getData).length !== 0) {
            setFormData({
                id: getData.id || '',
                name: getData.name || '',
                category: getData.category || '',
                price: getData.price || '',
                color: getData.color || '',
                quantity: getData.quantity || ''
            });
        }
    }, [getData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let newProduct = {
            id: formData.id || crypto.randomUUID(),
            name: formData.name,
            category: formData.category,
            price: formData.price,
            color: formData.color,
            quantity: formData.quantity
        };

        console.log(newProduct);
        addToList(newProduct);

        // Restablece el estado del formulario y cierra el modal
        setFormData({
            id: '',
            name: '',
            category: '',
            price: '',
            color: '',
            quantity: ''
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-4">
                <div className="flex items-center justify-between border-b p-4 rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {getTitle}
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Product name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option value="">Select category</option>
                                <option value="TV/Monitors">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="Gaming/Console">Gaming/Console</option>
                                <option value="Phones">Phones</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="$2999"
                                required
                                value={formData.price}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Color
                            </label>
                            <input
                                type="text"
                                id="color"
                                name="color"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="red"
                                required
                                value={formData.color}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="20"
                                required
                                value={formData.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
