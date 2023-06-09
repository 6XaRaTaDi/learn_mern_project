import { Post } from "../models/Post.js"


export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: err });
  }
}

export const createPost = async (req, res) => {
  try {
    const newPost = req.body
    const post = new Post(newPost)
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = Post.findOneAndUpdate(
      { _id: updatePost._id }, 
      updatePost, 
      { new: true })
    // await post.save();
    
  } catch (error) {
    res.status(500).json({ error: err });
  }
}

export const deletePost = async (req, res) => {
  try {
    const delteteId = req.body.id;

  } catch (error) {
    res.status(500).json({ error: err });
  }
}