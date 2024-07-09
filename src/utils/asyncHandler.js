const asyncHandler=(reqestHandler)=>{
      return async (req, res, next) => {
        Promise.resolve(reqestHandler(req,res,next)).catch((err)=>next(err))
      }
        
}
export{asyncHandler}
// const asyncHandler=(fun)=>async(req,res,next)=>{
//     try{
//         await fun(req,res,next)
//         }catch(err){
//             res.status(err.code || 500).json({
//                 success:false,
//                 message:err.message || "Internal Server Error"
//             })
//             next(err)
//             }
// }