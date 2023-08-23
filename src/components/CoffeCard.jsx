import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, coffeeName, quantity, supplier, taste, price} = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/coffes/${_id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                setCoffees(coffees.filter(cof => cof._id!== _id))
                }
            })
            }
          })
        }
    return (
        <div className="text-gray-800 border-2 border-gray-300 p-4">
            <h3 className="text-2xl">{coffeeName}</h3>
            <h4>Quantity: {quantity}</h4>
            <h4>Supplier: {supplier}</h4>
            <h4>Taste: {taste}</h4>
            <h4>Price: {price}</h4>
            <div className="flex justify-between text-white font-bold">
                <Link to={`/update/${_id}`} className="inline-block bg-green-500 py-2 rounded w-full text-center mr-1"><button>Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-500 py-2 rounded w-full ml-1">Delete</button>
            </div>
        </div>
    );
          }

export default CoffeCard;