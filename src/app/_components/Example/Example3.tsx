"use client";

import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Example3(): JSX.Element {
  const [data, setData] = useState<ToDo>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // v1, using async/await
    const fetchData = async () => {
      setIsLoading(true);

      try {
        console.log("Fetching data...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const fetchedData = (await response.json()) as ToDo;
        console.log("Data", fetchedData);
        setData(fetchedData);
        console.log("Data fetched!");
      } catch (error) {
        console.error("Error:", error);
      }

      setIsLoading(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();

    // v2, using .then()
    // setIsLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setData(json as ToDo);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     setIsLoading(false);
    //   });
  }, []);

  return (
    <Stack id="Example3-container" gap={2} width="300px">
      <Typography id="title" variant="h6">
        TODO
      </Typography>

      {isLoading && <Typography>Loading...</Typography>}

      {data && (
        <>
          <Typography>{`ID: ${data.id}`}</Typography>
          <Typography>{`UserId: ${data.userId}`}</Typography>
          <Typography>{`Title: ${data.title}`}</Typography>
          <Typography>{`Completed: ${data.completed}`}</Typography>
        </>
      )}
    </Stack>
  );
}

export { Example3 };
