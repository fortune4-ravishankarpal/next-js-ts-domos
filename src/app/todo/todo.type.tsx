import z from "zod";
export const todoSchema = z.object({
    id: z.number().min(1),
    title: z.string().min(2).max(100),
});

export const apiEndPoint = {
    todos: "todos",
};

export type tTodo = z.infer<typeof todoSchema>;
