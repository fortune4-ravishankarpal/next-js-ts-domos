"use client";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=2");
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    console.log("[94m [ res client side ]-6 [0m", data);
    return data;
};

export default function Posts() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    console.log("[38;5;220m [ data ]-12 [0m", data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <ul>
            {data.map((post: { id: number; title: string }) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
