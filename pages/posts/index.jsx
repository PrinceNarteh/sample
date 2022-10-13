import React from "react";
import { getPosts } from "../../utils/getPosts";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Link from "next/link";

export async function getServerSideProps({ req, res }) {
  const posts = await getPosts();

  const session = await unstable_getServerSession(req, res, authOptions);

  console.log(session);

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      {posts?.map((post) => (
        <p>
          <Link href={`/posts/${post._id}`}>{post.title}</Link>
        </p>
      ))}
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
