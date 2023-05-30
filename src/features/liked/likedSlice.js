import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("LikedItem")) || [],
  isFiltering: false,
  filterKeyword: "",
  filtered_list: [],
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
      state.filtered_list = state.filtered_list.filter(
        (item) => item.id !== payload
      );
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

      state.filtered_list = state.isFiltering
        ? state.list.filter(
            (item) =>
              item.description?.toLowerCase().includes(keyword) ||
              item.alt_description?.toLowerCase().includes(keyword)
          )
        : state.list;
    },
    findPicBy: (state, { payload }) => {
      const options = {
        none: () => state.filtered_list,
        date: () =>
          [...state.filtered_list].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          ),
        likes: () => [...state.filtered_list].sort((a, b) => b.likes - a.likes),
        height: () =>
          [...state.filtered_list].sort((a, b) => b.height - a.height),
        width: () => [...state.filtered_list].sort((a, b) => b.width - a.width),
        default: () => state.filtered_list,
      };

      state.filtered_list = (options[payload] || options["default"])();
    },
  },
});

const { addToLiked, deleteFromLiked, picDescriptionEdit, findPic, findPicBy } =
  LikedSlice.actions;

export { addToLiked, deleteFromLiked, picDescriptionEdit, findPic, findPicBy };
export default LikedSlice.reducer;
