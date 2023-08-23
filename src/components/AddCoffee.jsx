import Swal from 'sweetalert2'
import Header from './Header';
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffee.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const addCoffee = {coffeeName, quantity, price, supplier, taste}
        console.log(addCoffee);

        fetch('http://localhost:5000/coffes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon:'success',
                    title: 'Coffee Added Successfully',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }

  return (
    <>
    <Header></Header>
    <div className="max-w-screen-xl mx-auto my-8">
      <h1 className="text-3xl text-center text-gray-600 font-medium mb-4">Add Coffee</h1>
      <div className="p-16 rounded bg-gray-300">
        <form onSubmit={handleAddCoffee} className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="cofeeName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Coffee Name
            </label>
            <input
              type="text"
              name="coffee"
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
              className="w-full bg-gray-500 rounded p-2 text-white"
            />
          </div>
          <div>
            <button className="bg-gray-600 py-2 px-8 rounded w-full mt-6 text-white">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddCoffee;
