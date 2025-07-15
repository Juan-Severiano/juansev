
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from '../services/companyService';
import { CreateCompanyDto, UpdateCompanyDto } from '../types';

export const useGetAllCompanies = () => {
  return useQuery({ queryKey: ['companies'], queryFn: getAllCompanies });
};

export const useGetCompanyById = (id: string) => {
  return useQuery({ queryKey: ['company', id], queryFn: () => getCompanyById(id), enabled: !!id });
};

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateCompanyDto) => createCompany(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    }
  });
};

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCompanyDto }) => updateCompany(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      queryClient.invalidateQueries({ queryKey: ['company', id] });
    }
  });
};

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCompany(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    }
  });
};
