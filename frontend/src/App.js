import './App.css';
import Header from "./components/Header"
import {useState,useEffect} from "react"
import {Routes,Route} from "react-router-dom"
import InstructionPage from './components/InstructionPage';
import QuizQuestions from "./components/QuizQuestions"
import GooglePayButton from "./components/GooglePay"


function App() {

  const [userID,setuserID] = useState(localStorage.getItem("userID"))

  useEffect(() => {
    localStorage.setItem("userID",userID)
  },[userID])
  
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element = {<InstructionPage setuserid ={setuserID} />} />
       <Route path="/questions" element = {<QuizQuestions userID={userID} />} />
     </Routes>
     <GooglePayButton/>
    </div>
  );
}

export default App;
