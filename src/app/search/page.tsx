"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SearchType } from "~/constants";
import { api } from "~/trpc/react";
import { LoadingScreen } from "../_components";
import { debounce } from "lodash";

export default function Search() {
  const [query, setQuery] = useState("");
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
      type: SearchType.User,
      query: debouncedQuery,
    },
    {
      enabled: debouncedQuery.length > 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isFetching) {
    return <LoadingScreen />;
  }

  console.log("==> query", query);
  console.log("==> debouncedQuery", debouncedQuery);
  console.log("==> data", data);

  return (
    <>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for user or keywords..."
      />
    </>
  );
}
