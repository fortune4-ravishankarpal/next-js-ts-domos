"use client";
import { useForm } from "react-hook-form";
import {
    useCreatePostMutation,
    useDeletePostMutation,
    useGetPosts,
    useUpdatePostMutation,
} from "./post.provider";
import { tPost } from "@/types/post.type";
export function Posts() {
    const { data, error, isLoading } = useGetPosts();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as { message: string }).message}</div>;

    return (
        <ul>
            <AddPost />
            {Array.isArray(data) &&
                data?.map((post: tPost) => <PostDetail key={post.id} post={post} />)}
        </ul>
    );
}

function PostDetail({ post }: { post: tPost }) {
    const m = useForm({ defaultValues: { title: post.title } });
    const update = useUpdatePostMutation(post.id);
    const deletePost = useDeletePostMutation(post.id);
    return (
        <form onSubmit={m.handleSubmit((data) => update.mutate(data))}>
            <input {...m.register("title")} />
            <button type="submit" disabled={update.isPending}>
                Update
            </button>
            <button
                type="button"
                disabled={deletePost.isPending}
                onClick={() => deletePost.mutate()}
            >
                Delete
            </button>
        </form>
    );
}

function AddPost() {
    const m = useForm<{ title: string }>({ defaultValues: { title: "" } });
    const createMutation = useCreatePostMutation();
    return (
        <form onSubmit={m.handleSubmit((data) => createMutation.mutate(data))}>
            <input {...m.register("title")} placeholder="Title" />
            <button type="submit">Add</button>
        </form>
    );
}
