import { productModel } from "../../daos/products.js"
export async function postProductController(req, res, next) {
  console.log(req.body)
  const usuarioCreado = await productModel.create(req.body)
  res.status(201).json(usuarioCreado)
}