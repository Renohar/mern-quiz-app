import express from "express"
import User from "../models/userSchema.js"
import {Question, insertQuestions} from "../models/questionSchema.js"

const router = express.Router()

insertQuestions()

router.post("/user",async(req,res) => {
    try{
        const {userID} = req.body
        let user = await User.findOne({userID});
        if(!user){
            user = new User({userID})
            await user.save();
        }
        res.json({success:true,user})
    }
    catch(error){
        res.status(500).json(
            {
                success:false,
                error: error.message
            }
        )
    }
})


router.get("/questions", async (req,res) => {
    try{
       
        const { index } = req.query;
        
       
        const questions = await Question.find();
       

        if (index >= 0 && index <= questions.length){
            res.json(questions[index-1]);  
        }
        else {
            res.status(404).json({ message: 'Question not found' });
          }
    }
    catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
})





router.post('/answer', async (req, res) => {
    try {
      const { userID, questionID, selectedOption } = req.body;
      const user = await User.findOne({userID})
      console.log( userID, questionID, selectedOption)
     
      if (!user){
          return res.status(404).json({
              success:false,
              message: "user not found"
          })
      }

      if (!selectedOption) {
        return res.status(400).json({
            success: false,
            message: "selectedOption is required"
        });
        }

        let Marks;

        if (selectedOption === "Exactly like me"){
            Marks = 3
        }
        else if(selectedOption === "Much like me"){
            Marks = 2
        }
        else if(selectedOption === "A bit like me"){
            Marks = 1
        }
        else if(selectedOption === "Not me at all"){
            Marks = 0
        }
        
      
     
      user.quizAnswers.push({
        questionID: questionID,
        selectedOption: selectedOption,
        Marks: Marks,
      })
      
      await user.save()
      
      res.json({ success: true, message: "Answer saved successfully" });

    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });






export default router