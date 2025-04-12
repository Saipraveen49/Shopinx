import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Make sure to install react-toastify

const AddProductForm = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [sizes, setSizes] = useState([]);
  const [stock, setStock] = useState(0);
  const [bestseller, setBestseller] = useState(false);

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const categoryOptions = ['Clothing', 'Shoes', 'Accessories', 'Electronics', 'Home', 'Beauty'];

  const handleSizeChange = (size) => {
    setSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("stock", stock);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      console.log(token)
      const response = await axios.post('http://localhost:3000/api/product/add', formData, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setName('');
        setDescription('');
        setPrice('');
        setCategory('Clothing');
        setSizes([]);
        setStock(0);
        setBestseller(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block">Product Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border px-4 py-2 rounded" />
        </div>
        <div>
          <label className="block">Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full border px-4 py-2 rounded" />
        </div>
      </div>

      <div>
        <label className="block">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full border px-4 py-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border px-4 py-2 rounded">
            {categoryOptions.map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label className="block">Stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full border px-4 py-2 rounded" />
        </div>
      </div>

      <div>
        <label className="block">Sizes</label>
        <div className="flex flex-wrap gap-3 mt-2">
          {sizeOptions.map(size => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block">Images</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[image1, image2, image3, image4].map((img, idx) => (
            <div key={idx}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const setter = [setImage1, setImage2, setImage3, setImage4][idx];
                  handleImageUpload(e, setter);
                }}
              />
              {img && (
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview-${idx}`}
                  className="mt-2 w-full h-24 object-cover rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" checked={bestseller} onChange={() => setBestseller(!bestseller)} />
        <label>Bestseller</label>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Submit Product
      </button>
    </form>
  );
};

export default AddProductForm;
