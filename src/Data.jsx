import { useState,useEffect } from "react";
function Data(){
    const [products, setProducts]=useState([]);
    const[search,setSearch]=useState("");
    const[CategoryFilter,setCategoryFilter]=useState("");
    const [sortBy,setSortBY]=useState("name");
    const[sortOrder,setSortOrder]=useState("asc");
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [newProduct, setNewProduct]=useState({
        name:"", price:"", category:"", stock:""
    });
    //fetch
    const fetchProducts=async()=>{
        try{
            let url=`http://localhost:5000/product`;
            const res=await fetch(url);
            const data=await res.json();
            setProducts(data.products||data)
        }catch(err){
            console.log(err)
        }
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
}