// store/breadcrumbSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
}

const initialState: BreadcrumbState = {
  breadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumbs(state, action: PayloadAction<BreadcrumbItem[]>) {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setBreadcrumbs } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;