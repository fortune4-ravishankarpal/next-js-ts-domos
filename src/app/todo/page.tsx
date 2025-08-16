import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Todos } from "./todo.main";
import { gets } from "./todo.api";
import { apiEndPoint } from "./todo.type";
export default async function Page() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: [apiEndPoint.todos], queryFn: gets });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Todos />
        </HydrationBoundary>
    );
}
