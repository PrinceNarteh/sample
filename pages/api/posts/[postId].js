import db from "../../../lib/dbConnect";
import Post from "../../../models/post";

export async function handler(req, res) {
  if (req.method === "GET") {
    const { postId } = req.params;

    await db.connect();
    const post = await Post.findById(postId);
    db.disconnect();

    if (!post) {
      res.status(404).json({ message: "Post Not Found" });
      return;
    }

    res.status(200).json({ post });
  }
}
