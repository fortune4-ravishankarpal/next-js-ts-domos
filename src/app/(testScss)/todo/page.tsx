import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Posts } from "./Posts";

import { getPosts } from "./post.api";
export default async function Page() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Posts />
        </HydrationBoundary>
    );
}
