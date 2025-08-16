import z from "zod";
export const PostSchema = z.object({
    id: z.number().min(1),
    title: z.string().min(2).max(100),
});

export type tPost = z.infer<typeof PostSchema>;
