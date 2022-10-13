import axios from "axios";

export const getPosts = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.data.posts;

  if (id) {
    const post = posts.find((post) => post._id === id);
    return post;
  }

  return posts;
};
