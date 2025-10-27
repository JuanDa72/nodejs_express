const index=(req,res)=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(productos => res.send(productos));
}

export default{
    index
}   