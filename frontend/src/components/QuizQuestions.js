import React from 'react'
import {useState,useEffect} from "react"
import {useNavigate,useParams} from "react-router-dom"

const QuizQuestions = ({userID}) => {
   
    
    const [quizQuestions,setQuizQuestions] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [options,setOptions] = useState([])
    const [index,setIndex] = useState(1)
    

    

    const fetchQuestions = async () => {
        try{
           
            const response = await fetch(`http://localhost:4000/api/questions?index=${index}`)
            const data =await response.json()
            setQuizQuestions(data)
            
            const optionsText =  data.options
            setOptions(optionsText)
           
          
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
       
        fetchQuestions()
       
    },[index])




    const submitAnswer = async () => {
        
    try{
        const response = await fetch("http://localhost:4000/api/answer",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userID: userID,
                questionID: quizQuestions._id,
                selectedOption:selectedOption,

            })
        })

        const data = await response.json();
        setIndex(prev => prev+1)
        setSelectedOption("")
    }
    catch(error){
        console.log(error)
    }
        
        
        
    }





    return (
        <div>
           <p>Question</p>
           <div>
               <p>{index}.</p>
               <p>{quizQuestions.text}</p>
           </div>
           <div>

               <ul>
                   {options.map((option,index) => (
                       <li key={index}>
                           <label>
                               <input 
                                 type="radio"
                                 name="option"
                                 value={option.text}
                                 id={option._id}
                                 checked={selectedOption === option.text}onChange={(e) => setSelectedOption(e.target.value)}/>{option.text}
                           </label>
                       </li>
                   ))}
               </ul>


               
           </div>

           <button onClick={submitAnswer}>Submit</button>
           
        </div>
    )
}

export default QuizQuestions
