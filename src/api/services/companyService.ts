
import axios from 'axios';
import { Company, CreateCompanyDto, UpdateCompanyDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllCompanies = async (): Promise<Company[]> => {
  const response = await apiClient.get('/companies');
  return response.data.data;
};

export const getCompanyById = async (id: string): Promise<Company> => {
  const response = await apiClient.get(`/companies/${id}`);
  return response.data;
};

export const createCompany = async (data: CreateCompanyDto): Promise<Company> => {
  const response = await apiClient.post('/companies', data);
  return response.data;
};

export const updateCompany = async (id: string, data: UpdateCompanyDto): Promise<Company> => {
  const response = await apiClient.patch(`/companies/${id}`, data);
  return response.data;
};

export const deleteCompany = async (id: string): Promise<void> => {
  await apiClient.delete(`/companies/${id}`);
};
