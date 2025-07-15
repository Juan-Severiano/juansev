
import axios from 'axios';
import { LoginDto, UserResponse } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const authLogin = async (data: LoginDto): Promise<{ access_token: string }> => {
  const response = await apiClient.post('/auth/login', data);
  return response.data;
};

export const getMe = async (token: string): Promise<UserResponse> => {
  const response = await apiClient.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
