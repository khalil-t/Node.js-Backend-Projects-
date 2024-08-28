
const User =require('../db/index')
const postdata=async(req,res)=>{

const {username } =req.body
if(!username ){return res.status(400).json( {error:'error'})}
    try{
const nom=new User({username })
const savedUser= await nom.save();

res.status(201).json({
    username:savedUser.username,
    _id:savedUser._id
})

}
catch(error){res.status(500).json( {error:'error'})}
}

const getdata=async(req,res)=>{

try{
const list = await User.find({})

res.status(200).json({list});


}
catch(error){res.status(500).json( {error:'error'})}
}

const getform =async(req,res)=>{
const {description, duration }=req.body
let {date}=req.body
const _id= req.params._id
if(!date){date= new Date()}

try{

    const user = await User.findById(_id);
    if(!user){
    return res.status(500).json( {error:'not found'})
}

const exercises= {description, duration, date}
user.exercise.push(exercises)
await user.save();
const savedExercise = user.exercise[user.exercise.length - 1];

res.status(200).json({
    description:savedExercise.description,
    duration:savedExercise.duration,
    date:savedExercise.date.toDateString()

})
}
catch(error){res.status(500).json( {error:'error'})}
}
const logs =async(req,res)=>{
    const { from, to, limit } = req.query;

    const _id =req.params.id

    try{
const users= await User.findById(_id)
if (!users) {
    return res.status(404).json({ error: 'User not found' });
}

let task =users.exercise


if(from){

    task=task.filter(exo=>{

        return new Date(from) >= new Date(exo.date)
    })
}
if(to){

    task=task.filter(exo=>

       { return new Date(to)  <= new Date(exo.date)}
    )
}
if(limit){
    task=task.slice(0, parseInt(limit))
}
users.exercise=task
const log = users.exercise.map(
exercises=>({
    description:exercises.description,
    duration:exercises.duration,
    date:exercises.date.toDateString() 
})




)
res.status(200).json({

    _id:users._id,
    username: users.username,
count:log.length,
    log :log



})

    }
    catch(error){res.status(500).json( {error:'error'})}
}




//





module.exports={postdata,getdata,getform ,logs}
