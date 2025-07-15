
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService';
import { CreateUserDto, UpdateUserDto } from '../types';

export const useGetAllUsers = () => {
  return useQuery({ queryKey: ['users'], queryFn: getAllUsers });
};

export const useGetUserById = (id: string) => {
  return useQuery({ queryKey: ['user', id], queryFn: () => getUserById(id), enabled: !!id });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateUserDto) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) => updateUser(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['user', id] });
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
};
