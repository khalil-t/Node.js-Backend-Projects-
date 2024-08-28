

let counter = 1
const storobject={}






const posturl=(req,res)=>{
const {url}=req.body
storobject[counter]=url



console.log(storobject[counter])
res.status(200).json({original_url:url,

short_url:counter

})
counter += 1;


}
const geturl=(req,res)=>{
    const shorturl = req.params.shorturl;


    console.log(storobject[shorturl])
if(storobject[shorturl]){
    res.redirect(storobject[shorturl])
}
else{
    res.status(404).json({error:"error"
        
    })
}
  
}


module.exports={posturl,geturl}