import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "http://localhost:6000";

export const addToWishlistAction = createAsyncThunk(
  "user/add-to-wishlist",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${baseURL}/users/add-to-wishlist`, {
        itemId,
      });
      dispatch(getUserProfileAction());
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const removeFromWishlistAction = createAsyncThunk(
  "user/remove-from-wishlist",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(
        `${baseURL}/users/remove-from-wishlist`,
        {
          data: { itemId },
        }
      );
      dispatch(getUserProfileAction());
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const registerUserAction = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseURL}/register`, {
        name,
        email,
        password
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const loginUserAction = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${baseURL}/users/login`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(getUserProfileAction());
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const updateUserShippingAddressAction = createAsyncThunk(
  "user/update-shipping-address",
  async (
    {
      firstName,
      lastName,
      address,
      city,
      postalCode,
      state,
      phoneNumber,
      country,
    },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const token = getState()?.user?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${baseURL}/users/update/shipping`,
        {
          firstName,
          lastName,
          address,
          city,
          postalCode,
          state,
          phoneNumber,
          country,
        },
        config
      );
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserProfileAction = createAsyncThunk(
  "user/profile-fetched",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const token = getState()?.user?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${baseURL}/users/profile`, config);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  user: null,
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfileAction.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(getUserProfileAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addToWishlistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToWishlistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToWishlistAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(removeFromWishlistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromWishlistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeFromWishlistAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateUserShippingAddressAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserShippingAddressAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUserShippingAddressAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUserAction.pending, (state) => {
        state.userAuth.loading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.userAuth.userInfo = action.payload;
        state.userAuth.loading = false;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.userAuth.error = action.payload;
        state.userAuth.loading = false;
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
