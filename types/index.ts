export interface Project {
  id: number;
  title: string;
  type: string;
  date: string;
  description: string[];
  tags: string[];
  link: string;
  featured?: boolean;
  Problems?: string;
}

export interface Career {
  company: string;
  position: string;
  period: string;
  description: string[];
  projects?: Project[];
}

export interface Skills {
  [key: string]: string[];
}

export type Category = "All" | "OpenSource" | "Book" | "Blog Series" | "Speaking";
