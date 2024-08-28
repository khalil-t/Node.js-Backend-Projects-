const getdata=(req,res)=>{

    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Get the preferred languages from the request headers
    const language = req.headers['accept-language'] ;
    
    // Get the User-Agent string from the request headers
    const software = req.headers['user-agent'] ;
res.status(200).json({    
    ipaddress: ipAddress,
    language: language,
    software: software})

}
module.exports={getdata}