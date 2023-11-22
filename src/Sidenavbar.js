import React,{useState} from 'react'
import { GoHomeFill } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import SlideshowIcon from "@mui/icons-material/Slideshow";

import { BiHeart } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import ChatIcon from "@mui/icons-material/Chat";

import './Sidenavbar.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { TbPhotoVideo } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";


const Sidenavbar = () => {

  /*post popup */
  const [open, setOpen] = useState(false);
 
  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    
  }
   
  


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  p-2">
    <div className='nav nav-pills flex-column  px-0'>
    <div className='home-logo d-flex alignitems-center p-2' >
      <IoLogoInstagram className='mt-1' size={30}/>
      <img className='mb-4 m-0 d-none d-sm-inline d-md-inline'   src='../images/instagram.png' alt='instagram-logo'/>
    </div>
    {/* Navigation */}
    
      <button className="nav-item active  mb-2 p-1 bg-transparent">
        <GoHomeFill className='nav-icon me-1 fs-3 ' />
        <Link className='link' style={{ color: '#000' }} to ='/home'>
        <span className='fs-6 p-2 d-none d-sm-inline d-md-inline' >Home</span></Link>
      </button>
      <button className="nav-item mb-2 p-2  bg-transparent ">
        <BsSearch className='nav-icon me-1 fs-3 '/>
        <Link className='link' style={{ color: '#000' }} to ='/search'>
        <span className='fs-6 p-2 d-none d-sm-inline'>Search</span></Link>
      </button>
      <button className=" nav-item mb-2 p-2  bg-transparent">
        <MdOutlineExplore className='nav-icon me-1 fs-3 '/>
        <Link className='link' style={{ color: '#000' }} to ='/explore'>
          <span className='fs-6 p-2 d-none d-sm-inline'>Explore</span></Link>
      </button>
      <button className="nav-item mb-2  p-2  bg-transparent">
        <SlideshowIcon className='nav-icon me-1 fs-3 '/>
        <Link  className='link' style={{ color: '#000' }} to ='/reels'>
          <span className='fs-6 p-2 d-none d-sm-inline'>Reels</span></Link>
      </button>
      <button className="nav-item mb-2 p-2   bg-transparent">
        <ChatIcon className='nav-icon me-1 fs-3 '/>
        <Link className='link' style={{ color: '#000' }} to ='/messages'>
          <span className='fs-6 p-2 d-none d-sm-inline'>Messages</span></Link>
      </button>
      <button className="nav-item mb-2 p-2 bg-transparent">
        <BiHeart className='nav-icon me-1 fs-3 '/>
        <span className='fs-6 p-2 d-none d-sm-inline'>Notifications</span>
      </button>
      <button className="nav-item mb-2 p-2 bg-transparent" 
        onClick={openModal}>
           {/* data-bs-toggle="modal" data-bs-target="#myModal" */}
        <RiAddBoxLine className='nav-icon me-1 fs-3 '/>
        <span className='fs-6 p-2 d-none d-sm-inline'>Create</span>
        
      </button>
      {open ? (<Modal  open={open} onClose={closeModal}  center>
        
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
       
        </Modal>) : null}
      
      <button className="nav-item mb-2 p-2  bg-transparent ">
        
        <CgProfile className='nav-icon me-1 fs-3 '/>
        <Link className='link' style={{ color: '#000' }} to ='/profile'>
        <span className='fs-6 p-2 d-none d-sm-inline'>Profile</span></Link>
      </button>
     
      
    </div>
  </nav>
  
  {/* <div className="modal w-40 h-40 d-flex align-items-center justify-content-center" id="myModal">
        <div class="modal-dialog" style={{width:"700px"}}>
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Employee Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
          </div>
          </div> */}
    
  </>
  
  )
}

export default Sidenavbar