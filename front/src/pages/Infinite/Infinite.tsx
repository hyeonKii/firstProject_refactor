// import {useInfiniteQuery} from "@tanstack/react-query";
// import {Fragment} from "react";
// import {Text} from "@reactkit/ui/ui/Text";
// import {PaginatedView} from "@reactkit/ui/ui/PaginatedView";
// import {usePaginatedResultItems} from "@reactkit/ui/query/hooks/usePaginatedResultItems";
// import {TableLayout} from "@reactkit/ui/ui/TableLayout";
// import {useMemo} from "react";
// import {InfiniteData} from "@tanstack/react-query";

// interface QueryItemsParams {
//     startAt: number;
// }

// interface Item {
//     name: string;
//     price: number;
// }

// const resultsPerPage = 5;
// const range = (length: number) => Array.from({length}, (_, i) => i);

// const queryItems = async ({startAt = 0}: QueryItemsParams) => {
//     await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

//     const items: Item[] = range(resultsPerPage).map((index) => ({
//         name: `Item #${index + startAt}`,
//         price: Math.round(Math.random() * 1000),
//     }));

//     return {
//         items,
//         nextItem: startAt + resultsPerPage,
//     };
// };

// function usePaginatedResultItems<T, V>(
//     data: InfiniteData<T | undefined> | undefined,
//     getPageItems: (page: T) => V[]
// ): V[] {
//     return useMemo(() => {
//         const items: V[] = [];

//         data?.pages?.forEach((page) => {
//             if (page) {
//                 items.push(...getPageItems(page));
//             }
//         });

//         return items;
//     }, [data?.pages, getPageItems]);
// }

// const Infinite = () => {
//     const {data, isLoading, isFetchingNextPage, fetchNextPage, isFetched} =
//         useInfiniteQuery(
//             ["items"],
//             async ({pageParam}) => {
//                 if (pageParam === null) return;

//                 const result = await queryItems({startAt: pageParam});

//                 return result;
//             },
//             {
//                 refetchOnMount: true,
//                 keepPreviousData: false,
//                 getNextPageParam: (lastPage) => lastPage?.nextItem || null,
//             }
//         );

//     const items = usePaginatedResultItems(data, (response) => response.items);
//     const noItems = isFetched && items.length < 1;

//     return (
//         <TableLayout
//             gridTemplateColumns="120px 80px"
//             columnNames={["Name", "Price"]}
//         >
//             <PaginatedView
//                 onRequestToLoadMore={fetchNextPage}
//                 isLoading={isLoading || isFetchingNextPage}
//             >
//                 {noItems ? (
//                     <Text>No items 😴</Text>
//                 ) : (
//                     items.map(({name, price}) => (
//                         <Fragment key={name}>
//                             <Text>{name}</Text>
//                             <Text color="supporting">${price}</Text>
//                         </Fragment>
//                     ))
//                 )}
//             </PaginatedView>
//         </TableLayout>
//     );
// };

// export default Infinite;
