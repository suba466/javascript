const products=[
    {"id":1, "name":"Lipstick", "price":298, "rating":4.5,"deliveryDate":"6 Aug 2025", "category":"Makeup"},
    {"id":2, "name":"Conditioner", "price":199, "rating":3.8,"deliveryDate":"5 Aug 2025", "category":"Hair Care"},
    {"id":3, "name":"Mascara", "price":599, "rating":2.5,"deliveryDate":"8 Sep 2025", "category":"Makeup"},
    {"id":4, "name":"Moisturizer", "price":1099, "rating":4.7,"deliveryDate":"7 Aug 2025", "category":"Makeup"},
    {"id":5, "name":"Hair Serum", "price":56, "rating":3.5,"deliveryDate":"5 Aug 2025", "category":"Hair Care"},
    {"id":6, "name":"Shampoo", "price":5999, "rating":4.5,"deliveryDate":"26 Aug 2025", "category":"Hair Care"},
    {"id":7, "name":"Mobile case", "price":399, "rating":4.9,"deliveryDate":"20 Sep 2025", "category":"Mobile Accessories"},
    {"id":8, "name":"Eyeliner", "price":298, "rating":3.5,"deliveryDate":"16 Aug 2025", "category":"Makeup"},
    {"id":9, "name":"Mobile back holder", "price":499, "rating":1.5,"deliveryDate":"16 Aug 2025", "category":"Mobile Accessories"},
    {"id":10, "name":"Bluetooth", "price":9999, "rating":4.8,"deliveryDate":"18 Aug 2025", "category":"Mobile Accessories"}
];
function display(data){
    let tableBody=document.getElementById("productTable");
    tableBody.innerHTML="";
    for(let i=0;i<data.length;i++){
        let product=data[i];
        let row=document.createElement("tr");
        row.innerHTML="<td>"+product.id+"</td>"+
                      "<td>"+product.name+"</td>"+
                      "<td>"+product.price+"</td>"+
                      "<td>"+product.rating+"</td>"+
                      "<td>"+product.deliveryDate+"</td>"+
                      "<td>"+product.category+"</td>";
        tableBody.appendChild(row);
    }
}
window.onload=function(){
    document.getElementById("tableContainer").style.display = "block";
    display(products);
};
function input(){
    let key=document.getElementById("searchName").value;
    let filtered=[];
    if(key==0){
        alert("Please enter name.")
    }else{
        for(let i=0;i<products.length;i++){
        if (products[i].name.toLowerCase().includes(key.toLowerCase())) {
            filtered.push(products[i]);
    }}display(filtered);
    }
}
function input1(){
    let key=Number(document.getElementById("searchId").value);
    let filtered=[];
    if(key==0){
        alert("Please enter Id.")
    }else{
        if(key==""){
        display(products);
        return;
    }
    filtered=products.filter(p=>p.id==key);
    display(filtered);
    }
}
function input2(){
    let price=document.getElementById("searchPrice").value;
    let filtered=[];
    if(price==0){
        alert("Please enter no:..")
    }else if(price<=500){
        filtered=products.filter(p=>p.price<=price);
    }else if(price<=1500){
        filtered=products.filter(p=>p.price>500 && p.price<=1500);
    }else{
        filtered=products.filter(p=>p.price>1500);
    } display(filtered);
}
function input3(){
    let rating=Number(document.getElementById("searchRating").value);
    let filtered=[];
    if(rating==0){
        alert("Please enter no:..")
    }else if(rating<=2.5){
        filtered=products.filter(p=>p.rating<=rating);
    }else if(rating<=4){
        filtered=products.filter(p=>p.rating>2.5 && p.rating<=4);
    }else{
        filtered=products.filter(p=>p.rating>4 && p.rating<5);
    } display(filtered);
}
function sortAsc(){
    let sorted=products.slice();
    sorted.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    display(sorted);
}
function sortDes(){
    let sorted=products.slice();
    sorted.sort((a,b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    display(sorted);
}
function dropdown(){
    let selected=document.getElementById("category").value;
    if(selected==""){
        display(products);
        return;
    }
    let filtered=products.filter(p=>p.category==selected);
    display(filtered);
}
function fastDelivery(){
    let today=new Date;
    let filtered=products.filter(products=>{
        let delivery=new Date(products.deliveryDate);
        let diffTime=delivery-today;
        let diffDays=diffTime/(1000*60*60*24);
        return diffDays>=0 && diffDays<=7;
    });
    display(filtered);
}