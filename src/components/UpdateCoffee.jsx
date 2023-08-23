import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const updateCoffee = {coffeeName, quantity, price, supplier, taste}

        fetch(`http://localhost:5000/coffes/${loadedCoffee._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount){
                Swal.fire({
                    icon:'success',
                    title: 'Coffee Updated Successfully',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }


    return (
        <>
    <Header></Header>
    <div className="max-w-screen-xl mx-auto my-8">
      <h1 className="text-3xl text-center text-gray-600 font-medium mb-4">Update Coffee</h1>
      <div className="p-16 rounded bg-gray-300">
        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Coffee Name
            </label>
            <input
              type="text"
              name="coffeeName"
              defaultValue={loadedCoffee?.coffeeName}
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Coffee Quantity
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={loadedCoffee?.quantity}
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={loadedCoffee?.supplier}
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Taste
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={loadedCoffee?.taste}
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={loadedCoffee?.price}
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <button className="bg-gray-600 py-2 px-8 rounded w-full mt-6 text-white">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
    </>
    );
};

export default UpdateCoffee;