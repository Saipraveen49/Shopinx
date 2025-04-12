import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // ✅ Import Axios

const ProductsListPage = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log(token)
        const res = await axios.get(
          'http://localhost:3000/api/product/vendorlist',

          {
            headers: {
              token,
            },
          }
        );
        console.log(res.data)
        if (res.data.success) {
          setProducts(res.data.products);
        } else {
          setError('Failed to load products');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, [token,setProducts]);


  // ✅ Remove product using backend call
  const removeProduct = async (id) => {
    const confirm = window.confirm('Are you sure you want to remove this product?');
    if (!confirm) return;

    try {
      const res = await axios.post('http://localhost:3000/api/product/delete', { id }, {
        headers: {
          token
        }
      });
      if (res.data.success) {
        setProducts(products.filter(product => product._id !== id));
      } else {
        alert('Failed to remove product: ' + res.data.message);
      }
    } catch (err) {
      alert('Error removing product');
      console.error(err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]));

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Products</h1>
        <Link to="/products/add" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add New Product
        </Link>
      </div>

      <div className="bg-white shadow-md p-6 mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="createdAt">Sort by Date</option>
          <option value="price">Sort by Price</option>
          <option value="stock">Sort by Stock</option>
        </select>

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product._id} className="border-b py-4 flex items-start gap-4">
              <img
                src={
                  product.images?.length && product.images[0]
                    ? product.images[0]
                    : 'https://via.placeholder.com/150'
                }
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p>{product.description}</p>
                <p className="font-bold">Price: ${product.price}</p>
                <p className="text-gray-600">Stock: {product.stock} left</p>
                <p className="text-sm text-gray-500">Added on: {formatDate(product.createdAt)}</p>
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-auto"
                onClick={() => removeProduct(product._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsListPage;
