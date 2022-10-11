import { useState } from "react";

function Info () {
    const[indexNumber,setIndexNumber] = useState(0)
    const[score,setScore] = useState(0);
    const [startQuiz,setStartQuiz] = useState(false)
    const [showResult,setShowResult] = useState(false)
    const [questions,setQuestion] = useState([
        {
            question:"Constants are block-scoped variables.?",
            options:['True',"False"],
            correctAnswer : "True"

        },
        {
            question:"The statement 'let' declares a block scope local variable.?",
            options:['True',"False"],
            correctAnswer : "True"

        },
        {
            question:"const obj = { foo: 1 }; obj.bar = 2;",
            options:['{foo:1}','{foo:1,bar:2}','{foo:1,2:bar}',"None of the above"],
            correctAnswer : '{foo:1,bar:2}'

        },
        {
            question:"function mystery(...params) {return params;} let a = mystery(1,23,4);",
            options:['"a" is undefined',"'a' becomes [1,23,4]","'a' becomes '1,23,4'"],
            correctAnswer : "'a' becomes [1,23,4]"

        },
        {
            question:"ES6 introduces a special 'const' declaration. Do you know what it does?",
            options:['It is exactly the same as let',"It is used to define math-related variables","const turns variable into constant,and they can't be changed"],
            correctAnswer : "const turns variable into constant,and they can't be changed"

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
                <h1>You need to focus more on your Advance JavaScript Skills</h1>
            }
            <button onClick={()=>{return setShowResult(false), setStartQuiz(true),setScore(0)}} className="button" style={{marginTop:"20px",width:"15vw"}}>Play Again</button>
            </div>
            </div>
            :
            !startQuiz? <div style={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}> 
           
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
           <h1>JavaScript Quiz</h1>
            <h2>Play this Quiz Exercise will help you Build your Advance JavaScript Skills</h2>
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

export default Info