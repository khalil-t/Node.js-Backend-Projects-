
const Task = require('../db/connect')
const asynctask =require('../middleware/async')

const getAllTasks =asynctask( async (req, res) => {
  
        const tasks = await Task.find({})
        res.status(200).json({tasks})
  
  }
)
const createTask=async(req,res)=>{
    try{const task= await Task.create(req.body)

        res.status(201).json({task})}
        catch(err){console.log(err)}
}
    const getTask=async (req,res)=>{
try{
    const gettask= await Task.findOne({_id:req.params.id})
    if(!gettask){
        return res.status(404).json({ msg: 'Task not found' });
    }
    res.status(200).json({gettask})
}
catch(err){

console.log(err)
res.status(500).json({ msg: err.message });
}




        }






        const updateTask=async (req,res)=>{
try{


    

    const updatetask= await Task.findOneAndUpdate({_id:req.params.id},req.body)
if(!updatetask){
    res.status(404).json("not found")
}
res.status(200).json({updatetask})
}
catch(err){res.status(500).json({ msg: err.message });
}
            }



            const deleteTask=async (req,res)=>{

                try{
const deletetask=await Task.deleteOne({_id:req.params.id})

if(deletetask.deletedCount ===0){
    res.status(404).json("not found")
}
res.status(200).json("the task is deleted")

                }
                catch(err){
                    res.status(500).json("error")

                    
                    console.log(err)}
                }

                const editTask=(req,res)=>{

                    res.send('all itms')
                    
                    }



module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
