import React from "react";
import { getPosts } from "../../utils/getPosts";

export async function getStaticPaths() {
  const res = await getPosts();

  const paths = res.map((post) => ({ params: { postId: String(post._id) } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const post = await getPosts(context.params.postId);

  return {
    props: {
      post,
    },
  };
}

const PostDetails = ({ post }) => {
  return (
    <div>
      <h1>PostDetails</h1>
      <hr />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
