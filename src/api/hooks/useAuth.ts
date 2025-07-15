
import { useMutation, useQuery } from '@tanstack/react-query';
import { authLogin, getMe } from '../services/authService';
import { LoginDto } from '../types';

export const useAuthLogin = () => {
  return useMutation({ mutationFn: (data: LoginDto) => authLogin(data) });
};

export const useGetMe = (token: string) => {
  return useQuery({ queryKey: ['me', token], queryFn: () => getMe(token), enabled: !!token });
};
