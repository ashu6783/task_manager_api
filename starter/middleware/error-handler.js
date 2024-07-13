const {CustomAPIError}=require('../error/custom-error')

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode.json({msg:err.message}))
    }
    console.log(err);
    return res.status(err.status).json({msg:err.message})
}
module.exports=errorHandlerMiddleware