import Joi from "joi";
 const ModelProducts = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    description:Joi.string().required(),
 })
 export default ModelProducts