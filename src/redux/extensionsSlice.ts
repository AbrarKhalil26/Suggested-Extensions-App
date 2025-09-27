import { createSlice } from "@reduxjs/toolkit";
import type { IExtension } from "../interface/extension.interface";
import suggestedExRaw from "../db/data.json";
const suggestedEx: IExtension[] = suggestedExRaw as IExtension[];

interface ExtensionState{
  items: IExtension[];
}

const initialState: ExtensionState = {
  items: suggestedEx,
}

export const extensionsSlice = createSlice({
  name: "extensions",
  initialState,
  reducers: {
    
  },
});

export default extensionsSlice.reducer;
