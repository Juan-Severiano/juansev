
import axios from 'axios';
import { Certificate, CreateCertificateDto, UpdateCertificateDto } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

export const getAllCertificates = async (): Promise<Certificate[]> => {
  const response = await apiClient.get('/certificates');
  return response.data.data;
};

export const getCertificateById = async (id: string): Promise<Certificate> => {
  const response = await apiClient.get(`/certificates/${id}`);
  return response.data;
};

export const createCertificate = async (data: CreateCertificateDto): Promise<Certificate> => {
  const response = await apiClient.post('/certificates', data);
  return response.data;
};

export const updateCertificate = async (id: string, data: UpdateCertificateDto): Promise<Certificate> => {
  const response = await apiClient.patch(`/certificates/${id}`, data);
  return response.data;
};

export const deleteCertificate = async (id: string): Promise<void> => {
  await apiClient.delete(`/certificates/${id}`);
};
