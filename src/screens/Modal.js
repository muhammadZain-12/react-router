import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function StaticExample(prop) {
    console.log(prop)
  return (
    <Modal.Dialog  >
      <Modal.Header>
        <Modal.Title style={{textAlign:"center"}}>Play Quiz</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p style={{textAlign:"center"}}>Which level you prefer to play</p>
        <div className='modal-div' style={{display:"flex",flexDirection:"column",alignItems:"center"} }>
       <Link to="Html"> <Button className="button" variant='primary'>Html</Button></Link>
       <Link to="Css"><Button className="button" variant='primary'>Css</Button></Link>
       <Link to="Basic JavaScript" > <Button className="button" variant='primary'>Basic JavaScript</Button></Link>
       <Link to="Advance JavaScript"> <Button className="button" variant='primary'>Advance JavaScript</Button></Link>
        </div>
      </Modal.Body>
      
      <Modal.Footer >
        <button  onClick={()=>prop.onClick()} className='button' variant="secondary">Close</button>
      </Modal.Footer>

    
    </Modal.Dialog>
  );
}

export default StaticExample;