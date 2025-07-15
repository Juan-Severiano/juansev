
export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'owner' | 'commun';
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'owner' | 'commun';
  createdAt: string;
  updatedAt: string;
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  platform: string;
  url: string;
  workload: number;
  createdAt: string;
  updatedAt: string;
}

export interface Attach {
  id: string;
  path: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface Link {
  id: string;
  github: string;
  figma: string;
  publicUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  responsibleName: string;
  responsibleRole: string;
  photoId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  skills: string[];
  linksId: string;
  companyId?: string;
  coverId: string;
  photoId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface CreateUserDto {
  username: string;
  name: string;
  email: string;
  password: string;
  role: 'owner' | 'commun';
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}

export interface CreateProjectDto {
    name: string;
    slug: string;
    shortDescription: string;
    description: string;
    skills: string[];
    linksId: string;
    companyId?: string;
    coverId: string;
    photoId: string;
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}

export interface CreateCertificateDto {
    title: string;
    description: string;
    platform: string;
    url: string;
    workload: number;
}

export interface UpdateCertificateDto extends Partial<CreateCertificateDto> {}

export interface CreateOwnerDto {
    name: string;
    email: string;
    phone: string;
}

export interface UpdateOwnerDto extends Partial<CreateOwnerDto> {}

export interface CreateLinkDto {
    github: string;
    figma: string;
    publicUrl: string;
}

export interface UpdateLinkDto extends Partial<CreateLinkDto> {}

export interface CreateCompanyDto {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    responsibleName: string;
    responsibleRole: string;
}

export interface UpdateCompanyDto extends Partial<CreateCompanyDto> {}
