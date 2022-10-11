import { useState } from "react";

function Service () {
    const[indexNumber,setIndexNumber] = useState(0)
    const[score,setScore] = useState(0);
    const [startQuiz,setStartQuiz] = useState(false)
    const [showResult,setShowResult] = useState(false)
    const [questions,setQuestion] = useState([
        {
            question:"What does CSS stand for??",
            options:['Computer Style Sheets',"Creative Style Sheets","Cascading Style Sheets","Colorful Style Sheets"],
            correctAnswer : "Cascading Style Sheets"

        },
        {
            question:"Where in an HTML document is the correct place to refer to an external style sheet?            ?",
            options:['at the end of the document',"In the <head> section","In the <body> section"],
            correctAnswer : "In the <head> section"

        },
        {
            question:"Which HTML tag is used to define an internal style sheet?",           
            options:['<style>',"<script>","<css>"],
            correctAnswer : "<style>"

        },
        {
            question:"Which property is used to change the background color?",
            options:['bgColor',"Color","background-color"],
            correctAnswer : "background-color"

        },
        {
            question:"Which CSS property is used to change the text color of an element?",
            options:['color',"text-color","fgcolor"],
            correctAnswer : "color"

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
                <h1>You need to focus more on your Css Skills</h1>
            }
            <button onClick={()=>{return setShowResult(false), setStartQuiz(true),setScore(0)}} className="button" style={{marginTop:"20px",width:"15vw"}}>Play Again</button>
            </div>
            </div>
            :
            !startQuiz? <div style={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}> 
           
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
           <h1>Css Quiz</h1>
            <h2>Play this Quiz Exercise will help you Build your Css Skills</h2>
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

export default Service