import React from 'react'
import {useState} from "react"
import {useNavigate} from "react-router-dom"


const InstructionPage = ({setuserid}) => {
    const [userID, setUserID] = useState('');
    const Navigate = useNavigate()

    const handleStartTest = async(e) => {
        e.preventDefault();
        try{
            const response =await fetch("http://localhost:4000/api/user",{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({ userID: userID })
            })
            setUserID(userID);
            Navigate("/questions")
        }
        

        catch(error){
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setUserID(e.target.value)
        setuserid(e.target.value)
    }

    return (
        <div>
            <h2>Instructions: </h2>
            <p>Enter your UserID to start the test:</p>

            <form>
                <input name="userID" type="text" value={userID} onChange={handleChange}/>
                <button onClick={handleStartTest}>Start Test</button>
            </form>
        </div>
    )
}

export default InstructionPage
