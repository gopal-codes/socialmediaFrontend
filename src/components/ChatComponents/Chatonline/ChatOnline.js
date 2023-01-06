import React, { memo, useEffect, useState } from 'react'
import { axiosInstance } from '../../../config';
import { UserName } from '../../globiallyusedStyled'
import { EmptyContainerText, Image, ImageContainer, OnlineSymbol, RowContainer, Wrapper } from './Chatonline.style'

const ChatOnline = ({onlineUsers,loggedInId,setCurrentConversation}) => {

  const [friends,setFriends] =useState([]);
  const [onlineFriends,setOnlineFriends] = useState([]);


  useEffect(()=>{
    const getFriends = async ()=>{
      const res = await axiosInstance.get(`/users/friends/${loggedInId}`)
      setFriends(res.data);
    };
    getFriends();
  },[loggedInId]);
  
  useEffect(()=>{
    setOnlineFriends(friends.filter((f)=>onlineUsers.includes(f._id)));
  },[friends,onlineUsers]);
 

  const handleClick= async(o)=>{
    try {
      const res = await axiosInstance.get(`/conversations/find/${loggedInId}/${o._id}`);
      setCurrentConversation(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
    {
      onlineFriends?
      onlineFriends?.map((o)=>
      (
        <RowContainer key={o._id} online onClick={()=>handleClick(o)}>
           <ImageContainer>
               <Image src={o.profilePicture || '/socialmediaassets/men2.jpg'} />
               <OnlineSymbol />
           </ImageContainer>
           <UserName>{o.username}</UserName>
      </RowContainer>
      )):
      <EmptyContainerText>
            Online Friends
      </EmptyContainerText>
    }
           
 </Wrapper>
  )
}

export default memo(ChatOnline)