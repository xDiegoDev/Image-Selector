import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("LikedItem")) || [],
  isFiltering: false,
  filterKeyword: "",
};

const LikedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state, { payload }) => {
      if (!state.list.some((item) => item.id === payload.id)) {
        state.list.push(payload);
        localStorage.setItem("LikedItem", JSON.stringify(state.list));
      }
    },
    deleteFromLiked: (state, { payload }) => {
      const newList = state.list.filter((item) => item.id !== payload);
      state.list = newList;
      localStorage.setItem("LikedItem", JSON.stringify(state.list));
    },

    picDescriptionEdit: (state, { payload }) => {
      state.list = state.list.map((item) =>
        item.id === payload.id
          ? { ...item, description: payload.description }
          : item
      );
      localStorage.setItem("LikedItem", JSON.stringify(state.list));
    },
    findPic: (state, { payload }) => {
      const keyword = payload.trim().toLowerCase();
      state.isFiltering = keyword !== "";

      state.list = state.isFiltering
        ? JSON.parse(localStorage.getItem("LikedItem")).filter(
            (item) =>
              item.description?.toLowerCase().includes(keyword) ||
              item.alt_description?.toLowerCase().includes(keyword)
          )
        : JSON.parse(localStorage.getItem("LikedItem")) || [];
    },
    findPicBy: (state, { payload }) => {
      const options = {
        none: () => JSON.parse(localStorage.getItem("LikedItem")),
        date: () => state.list.sort((a, b) => b.date - a.date),
        likes: () => state.list.sort((a, b) => b.likes - a.likes),
        height: () => state.list.sort((a, b) => b.height - a.height),
        width: () => state.list.sort((a, b) => b.width - a.width),
        default: () => JSON.parse(localStorage.getItem("LikedItem")),
      };

      state.list = (options[payload] || options["default"])();
    },
  },
});

const { addToLiked, deleteFromLiked, picDescriptionEdit, findPic, findPicBy } =
  LikedSlice.actions;

export { addToLiked, deleteFromLiked, picDescriptionEdit, findPic, findPicBy };
export default LikedSlice.reducer;
