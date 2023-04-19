import products from "../mongo/products";

export const getAll = async(req, res)=>{
    try{
        const product = await products.find();
        return res.status(200).json(product)
    }catch(error){
        return res.status(400).json({message: error})
    }
}
export const getProduct = async(req, res)=>{
    try{
        const product = await products.findById(req.params.id);
        return res.status(200).json(product)
    }catch(error){
        return res.status(400).json({message: error})
    }
}
export const postProduct = async(req, res)=>{
    try{
        const product = await products.create(req.body);
        return res.status(200).json(product)
    }catch(error){
        return res.status(400).json({message: error})
    }
}
export const putProduct = async(req, res)=>{
    try{
        const product = await products.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(product)
    }catch(error){
        return res.status(400).json({message: error})
    }
}
export const deleteProduct = async(req, res)=>{
    try{
        const product = await products.findByIdAndDelete(req.params.id);
        return res.status(200).json(product)
    }catch(error){
        return res.status(400).json({message: error})
    }
}