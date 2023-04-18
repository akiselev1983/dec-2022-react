import React, {useState} from 'react';
import Posts from "./components/Posts/Posts";
import Flights from "./components/Flights/Flights";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";

const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
          {/*<Posts/>*/}
          {/*  <Flights/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export default App;