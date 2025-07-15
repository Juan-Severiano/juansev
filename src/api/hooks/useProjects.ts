
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from '../services/projectService';
import { CreateProjectDto, UpdateProjectDto } from '../types';

export const useGetAllProjects = () => {
  return useQuery({ queryKey: ['projects'], queryFn: getAllProjects });
};

export const useGetProjectById = (id: string) => {
  return useQuery({ queryKey: ['project', id], queryFn: () => getProjectById(id), enabled: !!id });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: (data: CreateProjectDto) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProjectDto }) => updateProject(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', id] });
    }
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};
