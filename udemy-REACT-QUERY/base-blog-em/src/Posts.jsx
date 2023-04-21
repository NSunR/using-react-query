import { useState } from "react";

import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const data = [];

  return (
    //5.이 Post컴포넌트에는 state와 button이 있어, 각 기능을 구현할 때 같이 볼거야.
    <>
      <ul>
        {/*1. 게시물 데이터를 매핑하는 곳 */}
        {/*2. 빈 데이터지만 useQuery로 대체할 거야. */}
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)} //4. onclick은 나중에 살펴보기.
          >
            {post.title}
          </li>
        ))}
        {/* 1.여기까지 게시물 데이터를 메핑하는 곳 */}
        {/* 3.이 데이터를 게시물 제목을 표시하는 목록(List)항목에 매핑할거야.*/}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
