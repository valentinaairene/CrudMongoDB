import { Router } from 'express'
import Task from '../models/task'

const router = Router()

router.get('/', async (req,res) => {

  const tasks = await Task.find().lean()

  res.render('index',{tasks: tasks})

});

router.post("/task/add", async (req,res)=>{
  try {
    const task = Task(req.body)
    const taskSaved = await task.save()
    res.redirect('/'); 
  } catch (error) {
    console.log(error);
  }
  
})
  
router.get("/about",(req,res) =>{
  console.log(req.body)
})
  
router.get("/edit/:id", async (req,res) =>{
  try {
    const task = await Task.findById(req.params.id).lean()
    res.render("edit", {task:task});
  } catch (error) {
    console.log(error.message)
  }

})
  
router.post('/edit/:id', async (req,res) =>{
  const {id} = req.params
  await Task.findByIdAndUpdate(id, req.body)
  res.redirect('/');
});

router.get('/delete/:id', async (req,res)=>{
  const {id} = req.params;

  await Task.findByIdAndDelete(id)

  res.redirect('/');
})


export default router;