import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Todos } from "./todo.main";
import { gets } from "./todo.api";
import { apiEndPoint } from "./todo.type";
import { wait } from "@/utils/utils";

export default async function Page() {
    const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 10 * 1000, retry: false } } });
    await queryClient.prefetchQuery({
        queryKey: [apiEndPoint.todos],
        queryFn: gets,
    });
    await wait(100).then(() => {
        throw "hello";
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Todos />
        </HydrationBoundary>
    );
}
