"use client";
import { useForm } from "react-hook-form";
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodo, useUpdateTodoMutation } from "./todo.service";
import { tTodo } from "@/app/todo/todo.type";

export function Todos() {
    const { data, error, isLoading } = useGetTodo();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as { message: string }).message}</div>;

    return (
        <ul>
            <AddTodo />
            {Array.isArray(data) && data?.map((Todo: tTodo, i) => <TodoDetail key={i} Todo={Todo} />)}
        </ul>
    );
}

function TodoDetail({ Todo }: { Todo: tTodo }) {
    const m = useForm({ defaultValues: Todo });
    const update = useUpdateTodoMutation(Todo.id);
    const deleteTodo = useDeleteTodoMutation();
    return (
        <form onSubmit={m.handleSubmit((data) => update.mutate(data))}>
            <input {...m.register("title")} />
            <button type="submit" disabled={update.isPending}>
                Update
            </button>
            <button type="button" disabled={deleteTodo.isPending} onClick={() => deleteTodo.mutate(Todo.id)}>
                Delete
            </button>
        </form>
    );
}

function AddTodo() {
    const m = useForm<{ title: string }>({ defaultValues: { title: "" } });
    const createMutation = useCreateTodoMutation();
    const handleSubmit = async (data: { title: string }) => {
        await createMutation.mutateAsync(data);
        m.reset();
    };
    return (
        <form onSubmit={m.handleSubmit(handleSubmit)}>
            <input {...m.register("title")} placeholder="Title" />
            <button type="submit" disabled={createMutation.isPending}>
                Add
            </button>
        </form>
    );
}
