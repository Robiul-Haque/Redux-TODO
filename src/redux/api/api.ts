import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => ({
                url: "/api/v1/students/all-students",
                method: "GET"
            }),
        })
    })
});

export const { useGetTodoQuery } = baseApi