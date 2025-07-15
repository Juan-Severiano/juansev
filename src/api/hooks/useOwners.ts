
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllOwners, getOwnerById, createOwner, updateOwner, deleteOwner } from '../services/ownerService';
import { CreateOwnerDto, UpdateOwnerDto } from '../types';

export const useGetAllOwners = () => {
  return useQuery({ queryKey: ['owners'], queryFn: getAllOwners });
};

export const useGetOwnerById = (id: string) => {
  return useQuery({ queryKey: ['owner', id], queryFn: () => getOwnerById(id), enabled: !!id });
};

export const useCreateOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateOwnerDto) => createOwner(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owners'] });
    }
  });
};

export const useUpdateOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateOwnerDto }) => updateOwner(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['owners'] });
      queryClient.invalidateQueries({ queryKey: ['owner', id] });
    }
  });
};

export const useDeleteOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteOwner(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owners'] });
    }
  });
};
