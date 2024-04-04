"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { SearchType } from "~/constants";
import { api } from "~/trpc/react";
import { SearchPage } from "../_components";
import { debounce } from "lodash";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState(SearchType.User);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const debouncedSearch = debounce((input: string) => {
    setDebouncedQuery(input);
  }, 500);

  useEffect(() => {
    if (query.length > 0) {
      debouncedSearch(query);
    }
    return () => debouncedSearch.cancel();
  }, [debouncedSearch, query]);

  const { data, isFetching } = api.search.search.useQuery(
    {
      type: searchType,
      query: debouncedQuery,
    },
    {
      enabled: debouncedQuery.length > 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <Box p={2}>
      <SearchPage
        result={data}
        isFetching={isFetching}
        query={query}
        setQuery={setQuery}
        searchType={searchType}
        setSearchType={setSearchType}
      />
    </Box>
  );
}
