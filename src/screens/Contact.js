import { useState } from "react";

function Contact () {
    const[indexNumber,setIndexNumber] = useState(0)
    const[score,setScore] = useState(0);
    const [startQuiz,setStartQuiz] = useState(false)
    const [showResult,setShowResult] = useState(false)
    const [questions,setQuestion] = useState([
        {
            question:"Inside which HTML element do we put the JavaScript?",
            options:['<js>',"<script>","<scripting>","<javascript>"],
            correctAnswer : "<script>"

        },
        {
            question:"Where is the correct place to insert a JavaScript?",
            options:['The <body> section',"The <head> section","both the <head> and the <body> section"],
            correctAnswer : "both the <head> and the <body> section"

        },
        {
            question:"What is the correct syntax for referring to an external script called xxx.js?",
            options:['<script href="xxx.js">','<script name="xxx.js">','<script src="xxx.js">'],
            correctAnswer : '<script src="xxx.js">'

        },
        {
            question:"The external JavaScript file must contain the <script> tag.?",
            options:['<True>',"<False>"],
            correctAnswer : "<True>"

        },
        {
            question:"How do you write 'Hello World' in an alert box?",
            options:['msg<"Hello World">','alert<"Hello World">','alertBox<"Hello World">','msgBox<"Hello World">'],
            correctAnswer : 'alert<"Hello World">'

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
                <h1>You need to focus more on your Basic JavaScript Skills</h1>
            }
            <button onClick={()=>{return setShowResult(false), setStartQuiz(true),setScore(0)}} className="button" style={{marginTop:"20px",width:"15vw"}}>Play Again</button>
            </div>
            </div>
            :
            !startQuiz? <div style={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}> 
           
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
           <h1>JavaScript Quiz</h1>
            <h2>Play this Quiz Exercise will help you Build your Basic JavaScript Skills</h2>
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

export default Contact