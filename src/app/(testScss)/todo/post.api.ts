// libs/api/posts.ts
import db from "@/libs/db.axios";
import { tPost } from "@/types/post.type";

export const getPosts = async () => (await db.get("posts")).data;

export const createPost = async (post: { title: string }) => (await db.post("posts", post)).data;

export const updatePost = async (id: number, post: tPost) =>
    (await db.put(`posts/${id}`, post)).data;

export const deletePost = async (id: number) => (await db.delete(`posts/${id}`)).data;
