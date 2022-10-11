import { useState } from "react"
import Image from "../images/quizHtmlImage.jpg"
import  htmlImage  from "../images/htmlImage.png";



function Html () {
    const[indexNumber,setIndexNumber] = useState(0)
    const[score,setScore] = useState(0);
    const [startQuiz,setStartQuiz] = useState(false)
    const [showResult,setShowResult] = useState(false)
    const [questions,setQuestion] = useState([
        {
            question:"What does HTML stand for?",
            options:['Hypertext Markup Language',"Home tool markup language","Hyperlinks and Text Markup language"],
            correctAnswer : "Hypertext Markup Language"

        },
        {
            question:"Choose the correct HTML element for the largest heading?",
            options:['<h6>',"<head>","<h1>","heading"],
            correctAnswer : "<h1>"

        },
        {
            question:"What is the correct HTML element for inserting a line break?",
            options:['<break>',"<lb>","<br>"],
            correctAnswer : "<br>"

        },
        {
            question:"Choose the correct HTML element to define important text?",
            options:['<important>',"<i>","<strong>","<b>"],
            correctAnswer : "<strong>"

        },
        {
            question:"Choose the correct HTML element to define emphasized text?",
            options:['<italic>',"<i>","<em>"],
            correctAnswer : "<em>"

        },
    ])
    const nextQuestion = (e) => {

        if(indexNumber+1==questions.length){
            setShowResult(true)
            setIndexNumber(0)
            setStartQuiz(false)
            if(questions[indexNumber].correctAnswer==e){
                setScore(score+1)
            }
            
            
        }   
       else if(questions[indexNumber].correctAnswer==e){
            setScore(score+1)
            setIndexNumber(indexNumber + 1)
        } 
        else{
            setIndexNumber(indexNumber+1)
        }
        }
        
       
        
    
    const PlayQuiz = () => {
        setStartQuiz(true)
    }
    console.log(score)
    return (
        <div style={{display:"flex",justifyContent:"center",height:"70vh"}}>
            {showResult?
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Your score is {score}</h1>
            <h1>you have acheived {(score/questions.length)*100}% percentage</h1>
            {
                score>=4?
                <h1>Your performance is Excellent</h1>:
                <h1>You need to focus more on your Html Skills</h1>
            }
            <button onClick={()=>{return setShowResult(false), setStartQuiz(true),setScore(0)}} className="button" style={{marginTop:"20px",width:"15vw"}}>Play Again</button>
            </div>
            </div>
            :
            !startQuiz? <div style={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}> 
           
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
           <h1>Html Quiz</h1>
            <h2>Play this Quiz Exercise will help you Build your Html Skills</h2>
            <button style={{marginTop:"20px"}} className="button" onClick={PlayQuiz}>Play Quiz</button></div></div>
            :<div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>

                <h1 style={{color:"orange"}}>Question # {indexNumber+1}/{questions.length}</h1>    
                
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center"}} ><h1>{questions[indexNumber].question}</h1>
            {questions[indexNumber].options.map((e)=>{
                    return <li className="questionDiv" style={{textAlign:"center",listStyle:"none",padding:"10px",fontWeight:"600",background:"lightGrey",marginTop:"10px",cursor:"pointer"} }  onClick={()=>nextQuestion(e)} >{e}</li>
            })}
            </div></div>}
            
           
                        

            </div>
    )
}

export default Html