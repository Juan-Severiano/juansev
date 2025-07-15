
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllLinks, getLinkById, createLink, updateLink, deleteLink } from '../services/linkService';
import { CreateLinkDto, UpdateLinkDto } from '../types';

export const useGetAllLinks = () => {
  return useQuery({ queryKey: ['links'], queryFn: getAllLinks });
};

export const useGetLinkById = (id: string) => {
  return useQuery({ queryKey: ['link', id], queryFn: () => getLinkById(id), enabled: !!id });
};

export const useCreateLink = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateLinkDto) => createLink(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] });
    }
  });
};

export const useUpdateLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateLinkDto }) => updateLink(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['links'] });
      queryClient.invalidateQueries({ queryKey: ['link', id] });
    }
  });
};

export const useDeleteLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteLink(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] });
    }
  });
};
