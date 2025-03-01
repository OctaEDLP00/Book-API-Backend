/**
 * @param {import('@types/express').Request} req
 * @param {import('@types/express').Response} res
 * @param {import('@types/').NextFunction} next
 */
const logger = (req, res, next) => {
  console.log(req.method)
  console.log(req.path)
  console.log(req.body)
  console.log('--------')
  next()
}

export { logger }
export default logger