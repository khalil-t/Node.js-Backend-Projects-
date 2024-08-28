/*
No Input (Empty Date): The function uses the current date and time.
Numeric Input: The function treats the input as a Unix timestamp.
String Input: The function treats the input as a string date.
*/

const getDateinfo=(req, res)=>{
const {date}=req.params;
let output;

if(!date){

output=new Date()

}
else if(!isNaN(date)){ output=new Date(parseInt(date))}

 else{output=new Date(date)}  

if(isNaN(output.getTime())){
    res.json({error:"Invalid date"})
}


else{

    const unixTimestamp = output.getTime()
    const utcString = output.toUTCString()

    res.status(200).json({
        unix: unixTimestamp,
        utc: utcString
    });    

}



}
module.exports={getDateinfo}