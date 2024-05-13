//src/app/models/repository.ts

export interface Repository {
    id: number;
    name: string;
    full_name: string; 
    description?: string;
    html_url: string;
    topics?: string[];
    languages?: string[];
  }