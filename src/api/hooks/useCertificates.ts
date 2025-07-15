
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllCertificates, getCertificateById, createCertificate, updateCertificate, deleteCertificate } from '../services/certificateService';
import { CreateCertificateDto, UpdateCertificateDto } from '../types';

export const useGetAllCertificates = () => {
  return useQuery({ queryKey: ['certificates'], queryFn: getAllCertificates });
};

export const useGetCertificateById = (id: string) => {
  return useQuery({ queryKey: ['certificate', id], queryFn: () => getCertificateById(id), enabled: !!id });
};

export const useCreateCertificate = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateCertificateDto) => createCertificate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
    }
  });
};

export const useUpdateCertificate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCertificateDto }) => updateCertificate(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      queryClient.invalidateQueries({ queryKey: ['certificate', id] });
    }
  });
};

export const useDeleteCertificate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCertificate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
    }
  });
};
