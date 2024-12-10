import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed && feed.data && feed.data.length > 0) return;

    try {
      const res =  await axios.get(BASE_URL + "/feed", {withCredentials:true});
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && feed.data && feed.data.length > 0 ? (
      <div> 
        <UserCard user={feed.data[0]} />
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};
export default Feed