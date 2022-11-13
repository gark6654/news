import { createAsyncThunk } from '@reduxjs/toolkit';

// example...
export const getPostById = createAsyncThunk('getPostById', async (id: number) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
});
