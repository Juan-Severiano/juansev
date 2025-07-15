
import axios from 'axios';
import { Owner, CreateOwnerDto, UpdateOwnerDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllOwners = async (): Promise<Owner[]> => {
  const response = await apiClient.get('/owners');
  return response.data.data;
};

export const getOwnerById = async (id: string): Promise<Owner> => {
  const response = await apiClient.get(`/owners/${id}`);
  return response.data;
};

export const createOwner = async (data: CreateOwnerDto): Promise<Owner> => {
  const response = await apiClient.post('/owners', data);
  return response.data;
};

export const updateOwner = async (id: string, data: UpdateOwnerDto): Promise<Owner> => {
  const response = await apiClient.patch(`/owners/${id}`, data);
  return response.data;
};

export const deleteOwner = async (id: string): Promise<void> => {
  await apiClient.delete(`/owners/${id}`);
};
