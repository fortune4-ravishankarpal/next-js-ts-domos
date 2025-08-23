"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { gets, create, update, del } from "./todo.api";
import { apiEndPoint, tTodo } from "@/app/todo/todo.type";

export function useGetTodo() {
    console.log("client list called");
    return useQuery({
        queryKey: [apiEndPoint.todos],
        queryFn: async () => await gets().catch(() => []),
        staleTime: 10 * 1000,
        retry: false,
    });
}
export function useUpdateTodoMutation(todoId: number) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: tTodo) => update(todoId, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [apiEndPoint.todos] }),
    });
}
export function useDeleteTodoMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: del,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [apiEndPoint.todos] }),
    });
}

export function useCreateTodoMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [apiEndPoint.todos] });
        },
    });
}
