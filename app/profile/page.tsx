"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/Profile";

const MyProfile = () => {
  const {data: session} = useSession()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      // @ts-ignore
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();

      // @ts-ignore
      setPosts(data);
    };

    // @ts-ignore
    if(session?.user.id) fetchPosts();
  }, []);


    const handleEdit = () =>{
        
    }
    const handleDelete = () =>{

    }
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;