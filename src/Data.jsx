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

    //register
    const handleRegister=async(username,password)=>{
        const res=await fetch("http://localhost:5000/reg",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(username,password),
        });
        const data= await res.json();
        alert(data.message);
    };

    //login
    const handleLogin=async(username,password)=>{
        const res=await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(username,password),
        });
        const data= await res.json();
        if(data.token){
            setToken(data.token);
            localStorage.setItem("token",data.token);
            alert("Login successful")
        }else{
            alert(data.message);
        }
    };
}