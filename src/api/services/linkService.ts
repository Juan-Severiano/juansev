
import axios from 'axios';
import { Link, CreateLinkDto, UpdateLinkDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllLinks = async (): Promise<Link[]> => {
  const response = await apiClient.get('/links');
  return response.data.data;
};

export const getLinkById = async (id: string): Promise<Link> => {
  const response = await apiClient.get(`/links/${id}`);
  return response.data;
};

export const createLink = async (data: CreateLinkDto): Promise<Link> => {
  const response = await apiClient.post('/links', data);
  return response.data;
};

export const updateLink = async (id: string, data: UpdateLinkDto): Promise<Link> => {
  const response = await apiClient.patch(`/links/${id}`, data);
  return response.data;
};

export const deleteLink = async (id: string): Promise<void> => {
  await apiClient.delete(`/links/${id}`);
};
