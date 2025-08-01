import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Posts from "./Posts";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=2");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    // Simulating a delay to mimic real-world scenarios
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();
    console.log("[94m [ res server side ]-6 [0m", data);
    if (!data) {
        return res.json();
    }
    return data;
}

export default async function Page() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Posts />
        </HydrationBoundary>
    );
}
