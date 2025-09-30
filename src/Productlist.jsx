import { useState, useEffect } from "react";
function Productlist() {
  const [allProducts, setAllProducts] = useState([]);       
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  // --- Add Product Form State ---
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [message, setMessage] = useState("");
  // Fetch all products once
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:1403/products");
      const data = await res.json();
      setAllProducts(data);
      setFilteredProducts(data); // Display all initially
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };
  // filter function
  const applyFilters = () => {
    let temp = [...allProducts];

    if (search) {
      const keyword = search.toLowerCase();
      temp = temp.filter((p) => p.name.toLowerCase().includes(keyword));
    }
    if (category) {
      temp = temp.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (minPrice) temp = temp.filter((p) => p.price >= parseInt(minPrice));
    if (maxPrice) temp = temp.filter((p) => p.price <= parseInt(maxPrice));

    if (sortBy === "price") temp.sort((a, b) => a.price - b.price);
    if (sortBy === "price_desc") temp.sort((a, b) => b.price - a.price);
    if (sortBy === "name") temp.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredProducts(temp);
  };
  useEffect(() => {
    applyFilters();
  }, [search, category, minPrice, maxPrice, sortBy, allProducts]);
  // --- Handle Add Product ---
  const handleAddProduct = async () => {
    if (!newName || !newCategory || !newPrice) {
      setMessage("Please fill all fields");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: newName,
      category: newCategory,
      price: parseInt(newPrice),
    };
    try {
      const res = await fetch("http://localhost:1403/add-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      fetchProducts();
      setNewName("");
      setNewCategory("");
      setNewPrice("");
    } catch {
      setMessage("Something went wrong. Try again.");
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Products</h2>
      {/* --- Add Product Form --- */}
      <div className="card p-3 mb-4 shadow-sm">
        <h5>Add New Product</h5>
        <input type="text"placeholder="Name" value={newName}onChange={(e) => setNewName(e.target.value)}className="form-control mb-2"/>
        <input type="text" placeholder="Category"value={newCategory}onChange={(e) => setNewCategory(e.target.value)}className="form-control mb-2" />
        <input type="number" placeholder="Price"value={newPrice} onChange={(e) => setNewPrice(e.target.value)}className="form-control mb-2"/>
        <button className="btn btn-primary w-100" onClick={handleAddProduct}>Add Product </button>
        {message && <p className="mt-2 text-center">{message}</p>}
      </div>
      {/* Filters/Search/Sort Inputs */}
      <div className="mb-3 d-flex flex-wrap gap-2">
      <h5>Search by name:</h5>
        <input type="text"
          placeholder="Search by name" value={search}
          onChange={(e) => setSearch(e.target.value)}className="form-control"/>
        <h5>Select the category:</h5>
        <select value={category}
          onChange={(e) => setCategory(e.target.value)}className="form-control" >
          <option value="">All Categories</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Mobile">Mobile</option>
          <option value="Others">Others</option>
        </select>
        <h5>Sort:</h5>
        <input type="number"  placeholder="Min Price" value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}className="form-control"  />
        <input type="number" placeholder="Max Price"value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)} className="form-control" />
        <select value={sortBy}
          onChange={(e) => setSortBy(e.target.value)} className="form-control" >
          <option value="">Sort By</option>
          <option value="price">Price Asc</option>
          <option value="price_desc">Price Desc</option>
          <option value="name">Name</option>
        </select>
      </div>
      {/* Products Display */}
      <div className="row">
        {filteredProducts.length === 0 && <p className="text-center">No products found</p>}
        {filteredProducts.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{p.name}</h5>
              <p>Category: {p.category}</p>
              <p>Price: ₹{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlist;
