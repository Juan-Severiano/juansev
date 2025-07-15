import axios from 'axios';
import { User, CreateUserDto, UpdateUserDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllUsers = async (): Promise<User[]> => {
  const response = await apiClient.get('/users');
  return response.data.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (data: CreateUserDto): Promise<User> => {
  const response = await apiClient.post('/users', data);
  return response.data;
};

export const updateUser = async (id: string, data: UpdateUserDto): Promise<User> => {
  const response = await apiClient.patch(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(`/users/${id}`);
};
