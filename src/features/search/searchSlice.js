import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  status: "idle",
  term: "",
};

//ver cómo llamar a fotos random.

// BLV - Xf0kEhtEc2EG_yzoNClpweDgGpbXN9oTBuPstmw;
//9nNV7AIvAc4x3NMJ-YVyZkjdwg5lBTKJKC67zfoAPW0

export const fetchRandomImages = createAsyncThunk(
  "search/getImages",
  async (query) => {
    try {
      if (!query || query === "") {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=24&client_id=BLV-Xf0kEhtEc2EG_yzoNClpweDgGpbXN9oTBuPstmw`
        );
        const data = await response.json();
        console.log(data);
        return [...data];
      } else {
        // console.log(`${query}`);
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=24&client_id=BLV-Xf0kEhtEc2EG_yzoNClpweDgGpbXN9oTBuPstmw`
        );
        const data = await response.json();
        console.log(data);
        return [...data.results];
      }
    } catch (error) {
      console.log(
        `There has been an error trying to fetch to the API ${error}`
      );
    }
  }
);

export const searchSlice = createSlice({
  name: "images",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomImages.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRandomImages.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchRandomImages.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.results = action.payload;
      });
  },
});

export default searchSlice.reducer;
