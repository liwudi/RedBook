import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './index';
// 用户信息：Interface定义
export interface UserInfo {
  username: string;
  age: number;
  userAvatar: string;
}
const initialState: UserInfo = {
  username: 'mapbar',
  age: 22,
  userAvatar: 'XXX',
};
export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserInfo>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {updateUserInfo} = userSlice.actions;

export const userInfo = (state: RootState) => state.user;

export default userSlice.reducer;
