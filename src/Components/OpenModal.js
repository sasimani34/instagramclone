import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import './OpenModal.css';
import { TbPhotoVideo } from "react-icons/tb";

const OpenModal = ({openmodal,closeModal}) => {


  return (
    <div>
      {/* <div className="popup-container">
        <div className="popup-body">
        <h1>{text}</h1>
        <button style={{top: '0',right:'0'}} onClick={closePopup}> X</button>
      </div>
    </div> */}
       <Modal  open={openmodal} onClose={closeModal} backdrop="static" center>
        
        <div className='modal-div  d-flex flex-column align-items-center'  
        style={{width: '300px',height:'300px'}}>
        <p className='text-center  fs-5 p-2'  
          style={{borderBottom:'2px solid black',fontWeight:'500'}}>
          
          create new post
        </p>
       
        <TbPhotoVideo className='icon'/><br/><br/>
        <p>Drag photos and videos here</p>
        <button className='btn btn-primary'>Select from computer</button>
        </div>
       
        </Modal>
      
    </div>
  )
}

export default OpenModal