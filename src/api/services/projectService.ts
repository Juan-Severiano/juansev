
import axios from 'axios';
import { Project, CreateProjectDto, UpdateProjectDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get('/projects');
  return response.data.data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const response = await apiClient.get(`/projects/${id}`);
  return response.data;
};

export const createProject = async (data: CreateProjectDto): Promise<Project> => {
  const response = await apiClient.post('/projects', data);
  return response.data;
};

export const updateProject = async (id: string, data: UpdateProjectDto): Promise<Project> => {
  const response = await apiClient.patch(`/projects/${id}`, data);
  return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await apiClient.delete(`/projects/${id}`);
};
