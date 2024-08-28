const {connectDB} =require('./db/connect')
const jsonproduct =require('./products.json')
const {Task}=require('./db/connect')



const populate =async()=>{
try{
await connectDB()
await Task.deleteMany()
await Task.create(jsonproduct)
console.log("DONE !")

}



catch(err){console.log(err)}



}
populate()

 