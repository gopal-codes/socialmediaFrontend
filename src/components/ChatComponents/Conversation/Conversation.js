import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config';
import { ConversationImg, ConversationName, Wrapper } from './Conversation.style'

const Conversation = ({conversation,currentuser}) => {

  const [frduser,setfrduser] = useState(null);

  useEffect(()=>{
    const friendId = conversation.members.find((m)=>m !== currentuser._id);
    const getUser = async ()=>{
      try {
        const res = await axiosInstance.get(`/users/${friendId}`)
        setfrduser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  },[currentuser._id,conversation.members])

  return (
    <Wrapper>
        <ConversationImg src={frduser?.profilePicture || '/socialmediaassets/vector.jpg'} alt="profileback" />
        <ConversationName>{frduser?.username}</ConversationName>
    </Wrapper>
  )
}

export default Conversation