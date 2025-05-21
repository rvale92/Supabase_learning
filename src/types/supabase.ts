export interface Certification {
  id: number;
  name: string;
  code: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Topic {
  id: number;
  certification_id: number;
  title: string;
  description: string;
  percentage: number;
  created_at: string;
  updated_at: string;
}

export interface StudyMaterial {
  id: number;
  topic_id: number;
  title: string;
  content: string;
  type: 'note' | 'link' | 'document';
  url?: string;
  created_at: string;
  updated_at: string;
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      certifications: {
        Row: {
          id: string
          title: string
          code: string | null
          description: string | null
          vendor: string | null
          level: string | null
          exam_time: number | null
          passing_score: number | null
          number_of_questions: number | null
          price: number | null
          prerequisites: string | null
          validity: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          code?: string | null
          description?: string | null
          vendor?: string | null
          level?: string | null
          exam_time?: number | null
          passing_score?: number | null
          number_of_questions?: number | null
          price?: number | null
          prerequisites?: string | null
          validity?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          code?: string | null
          description?: string | null
          vendor?: string | null
          level?: string | null
          exam_time?: number | null
          passing_score?: number | null
          number_of_questions?: number | null
          price?: number | null
          prerequisites?: string | null
          validity?: string | null
          created_at?: string
        }
      }
      topics: {
        Row: {
          id: string
          certification_id: string
          title: string
          description: string | null
          percentage: number | null
          subtopics: string[] | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          certification_id: string
          title: string
          description?: string | null
          percentage?: number | null
          subtopics?: string[] | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          certification_id?: string
          title?: string
          description?: string | null
          percentage?: number | null
          subtopics?: string[] | null
          created_at?: string
          updated_at?: string | null
        }
      }
      quizzes: {
        Row: {
          id: string
          certification_id: string
          title: string
          description: string | null
          questions: Json | null
          time_limit: number | null
          passing_score: number | null
          created_at: string
        }
        Insert: {
          id?: string
          certification_id: string
          title: string
          description?: string | null
          questions?: Json | null
          time_limit?: number | null
          passing_score?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          certification_id?: string
          title?: string
          description?: string | null
          questions?: Json | null
          time_limit?: number | null
          passing_score?: number | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
