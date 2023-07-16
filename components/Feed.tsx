"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
  console.log(data, "data")
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          // @ts-ignore
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>);
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  // @ts-ignore
  const handleSearchChange = (e) => {
    e.preventDefualt();

    // SetSearchText(e.)
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      console.log("data", data)
      // @ts-ignore
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full felx-center">
        <input
          type="text"
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => { }} />
    </section>
  );
};

export default Feed;
