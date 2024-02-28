import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    options: [{
      text: {
       type: String,
      required: true
      },
      marks: {
        type: Number,
        required: true
      }
    }],
  }, { timestamps: true });

  const Question = mongoose.model('Question',questionSchema);


  const insertQuestions = async() => {
    try{
      const count = await Question.countDocuments();
      if(count === 0){

        const questions =  [
          {
            text: "I believe teams work best when everyone is involved in taking decisions.",
            options: [
              { text: "Exactly like me", marks: 3 },
              { text: "Much like me", marks: 2 },
              { text: "A bit like me", marks: 1 },
              { text: "Not me at all", marks: 0 }
            ]
          },
          {
            text: "I’m good at bringing out the best in other people.",
            options: [
              { text: "Exactly like me", marks: 3 },
              { text: "Much like me", marks: 2 },
              { text: "A bit like me", marks: 1 },
              { text: "Not me at all", marks: 0 }
            ]
          },
          {
            text: "I can take on a leadership role when needed, but don’t consider myself a ‘leader’",
            options: [
              { text: "Exactly like me", marks: 3 },
              { text: "Much like me", marks: 2 },
              { text: "A bit like me", marks: 1 },
              { text: "Not me at all", marks: 0 }
            ]
          },
          {
            text: "I’m happy to act as the spokesperson for our group",
            options: [
              { text: "Exactly like me", marks: 3 },
              { text: "Much like me", marks: 2 },
              { text: "A bit like me", marks: 1 },
              { text: "Not me at all", marks: 0 }
            ]
          },
          {
            text: "I’m good at adapting to different situations",
            options: [
              { text: "Exactly like me", marks: 3 },
              { text: "Much like me", marks: 2 },
              { text: "A bit like me", marks: 1 },
              { text: "Not me at all", marks: 0 }
            ]
          },
      
        ];

        await Question.insertMany(questions);
        console.log("Questions added successfully.");
      }
      else{
        console.log("Questions already exist.");
      }
    }
    catch(error){
      console.log(error)
    }
  }

  export { Question, insertQuestions };