"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, getPosts, updatePost } from "./post.api";

export function useGetPosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        staleTime: 10 * 1000,
    });
}
export function useUpdatePostMutation(postId: number) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { title: string }) => updatePost(postId, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });
}
export function useDeletePostMutation(postId: number) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => deletePost(postId),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });
}

export function useCreatePostMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
}
