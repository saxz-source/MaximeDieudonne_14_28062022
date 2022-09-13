export type TableParams = {
    seenEntries: number;
    pageNumber: number;
    sortedColumn: SortedColumn;
    searchValue : string;
};

export type SortedColumn = {
    name: string;
    type: string;
};
