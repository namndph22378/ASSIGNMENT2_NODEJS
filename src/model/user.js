import Joi from "joi";
export const Dangky = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
 });
 export const Dangnhap= Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
 });
