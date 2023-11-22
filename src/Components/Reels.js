import React from 'react'
import './Reels.css';
import Sidenavbar from '../Sidenavbar';
import { Avatar } from '@mui/material';
import { BsMusicNoteList } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { FiMessageCircle } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

const Reels = () => {
  return (
    <div className="app">
     
        <div className="row">
        <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>
            <div className="col m-10 d-flex flex-column"  >
              <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://player.vimeo.com/external/464508537.sd.mp4?s=206f33573237e20f260d4474ec6ce2957ed9ae8e&profile_id=165&oauth2_token_id=57447761'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'>
              
               
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>
        <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://player.vimeo.com/external/479728625.sd.mp4?s=f4f886d3d45a0312d8d47419647788178535a2c6&profile_id=165&oauth2_token_id=57447761'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'>
              
               
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>
              {/* <div className='d-flex flex-column align-items-center justify-content-center'>
                {/* <div className="responsive-video text-center bg-success mt-4">  */}
                    
                    {/* <iframe className='responsive-iframe rounded'  src='../images/video (2160p).mp4'
                       
                       allow='autoplay; encrypted-media'
                       allowFullScreen
                       title='video' 
                       width="400"
                       height="550"></iframe>
                      <iframe className='responsive-iframe rounded' src='../images/1.mp4'
                       
                       allow='autoplay; encrypted-media'
                       allowFullScreen
                       title='video' 
                       width="400"
                       height="500"></iframe>
              <div className='reelsSectionOneHeader'>
              <div className='reelsSectionOProfile'>
                <Avatar/>
                <p> &#183;</p>
                <h2>Follow</h2>
              </div>
              <div className='reelsCaption'>
                <p>video</p>
              </div>
              <div className='reelsAudioTitle'>
                <BsMusicNoteList size={12} color="white" style={{ padding: '2px' }} />
                <p> Original Audio</p>
              </div>
             
          
        </div>  */}
                
          
            </div>
        </div>
    </div>
  )
}

export default Reels