import React,{useState} from 'react'
import './Home.css';

import Post from './Post';
import Suggestions from './Suggestions';
import Sidenavbar from './Sidenavbar';

const Home = () => {

  const [posts, setPosts] = useState([
    {
      user: "James",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWrX5_EwHypxle1rOXA4iv_CF26XrGyDWcg&usqp=CAU",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Radhika",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEIs9WjRPDk8DPWyBwtQxW_u7w9ivS0py6w&usqp=CAU",
      likes: 20,
      timestamp: "1d",
    },
    {
      user: "Aarazo kurna",
      postImage:
        "https://plus.unsplash.com/premium_photo-1697537045857-cf7ebd56e8e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D",
      likes: 40,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://images.unsplash.com/photo-1622770151370-1fd99a60b6ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxaU1PREM1VUowNHx8ZW58MHx8fHx8",
      likes: 14,
      timestamp: "2hr",
    },
  ]);

  return (
    <div className='home '>
      <div className="row">
        <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>

        { /*timeline*/}
        <div className="col-lg-7">
          <div className='img-slide'>
            
          </div>
          <div className="home-timeline">
            
            <div className="timeline__posts">
                {posts.map((post) => (
                  <Post
                    user={post.user}
                    postImage={post.postImage}
                    likes={post.likes}
                    timestamp={post.timestamp}
                  />
                ))}
            </div>
          </div>
        </div>
        { /*suggestions */}
        <div className="col-lg-3">
          <div className="home-suggestion d-none d-sm-inline">
              <Suggestions/>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home