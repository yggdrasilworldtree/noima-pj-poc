export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      breaths: {
        Row: {
          created_at: string | null
          emotion: string | null
          fire_id: string | null
          id: string
          message: string | null
        }
        Insert: {
          created_at?: string | null
          emotion?: string | null
          fire_id?: string | null
          id?: string
          message?: string | null
        }
        Update: {
          created_at?: string | null
          emotion?: string | null
          fire_id?: string | null
          id?: string
          message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "breaths_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "breaths_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "breaths_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
        ]
      }
      composts: {
        Row: {
          aroma: string | null
          created_at: string | null
          id: string
          message: string | null
          nutrient: number | null
          tree_id: string | null
          user_id: string | null
        }
        Insert: {
          aroma?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          nutrient?: number | null
          tree_id?: string | null
          user_id?: string | null
        }
        Update: {
          aroma?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          nutrient?: number | null
          tree_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "composts_tree_id_fkey"
            columns: ["tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
        ]
      }
      fire_inheritances: {
        Row: {
          child_id: string | null
          created_at: string | null
          id: string
          parent_id: string | null
          relation_note: string | null
        }
        Insert: {
          child_id?: string | null
          created_at?: string | null
          id?: string
          parent_id?: string | null
          relation_note?: string | null
        }
        Update: {
          child_id?: string | null
          created_at?: string | null
          id?: string
          parent_id?: string | null
          relation_note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fire_inheritances_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_inheritances_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_inheritances_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_inheritances_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_inheritances_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_inheritances_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
        ]
      }
      fire_resonances: {
        Row: {
          created_at: string | null
          fire_id: string
          id: string
          material: string | null
          resonance_type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          fire_id: string
          id?: string
          material?: string | null
          resonance_type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          fire_id?: string
          id?: string
          material?: string | null
          resonance_type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fire_resonances_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_resonances_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_resonances_fire_id_fkey"
            columns: ["fire_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
        ]
      }
      fire_revives: {
        Row: {
          count: number | null
          created_at: string | null
          from_id: string | null
          id: string
          to_id: string | null
        }
        Insert: {
          count?: number | null
          created_at?: string | null
          from_id?: string | null
          id?: string
          to_id?: string | null
        }
        Update: {
          count?: number | null
          created_at?: string | null
          from_id?: string | null
          id?: string
          to_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fire_revives_from_id_fkey"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_revives_from_id_fkey"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_revives_from_id_fkey"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_revives_to_id_fkey"
            columns: ["to_id"]
            isOneToOne: false
            referencedRelation: "fires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_revives_to_id_fkey"
            columns: ["to_id"]
            isOneToOne: false
            referencedRelation: "fires_graveyard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fire_revives_to_id_fkey"
            columns: ["to_id"]
            isOneToOne: false
            referencedRelation: "fires_with_parents"
            referencedColumns: ["id"]
          },
        ]
      }
      fires: {
        Row: {
          breath_history: Json | null
          created_at: string
          elements: string | null
          emotion_type: string | null
          expired: boolean | null
          id: string
          text: string | null
        }
        Insert: {
          breath_history?: Json | null
          created_at?: string
          elements?: string | null
          emotion_type?: string | null
          expired?: boolean | null
          id?: string
          text?: string | null
        }
        Update: {
          breath_history?: Json | null
          created_at?: string
          elements?: string | null
          emotion_type?: string | null
          expired?: boolean | null
          id?: string
          text?: string | null
        }
        Relationships: []
      }
      flows: {
        Row: {
          current_stage: string | null
          id: string
          is_reabsorbed: boolean | null
          last_seen_at: string | null
          tree_id: string | null
        }
        Insert: {
          current_stage?: string | null
          id?: string
          is_reabsorbed?: boolean | null
          last_seen_at?: string | null
          tree_id?: string | null
        }
        Update: {
          current_stage?: string | null
          id?: string
          is_reabsorbed?: boolean | null
          last_seen_at?: string | null
          tree_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flows_tree_id_fkey"
            columns: ["tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
        ]
      }
      fruits: {
        Row: {
          body: string | null
          created_at: string | null
          id: string
          is_published: boolean | null
          title: string | null
          tree_id: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          title?: string | null
          tree_id?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          title?: string | null
          tree_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fruits_tree_id_fkey"
            columns: ["tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
        ]
      }
      grafts: {
        Row: {
          created_at: string | null
          from_tree_id: string | null
          id: string
          to_tree_id: string | null
        }
        Insert: {
          created_at?: string | null
          from_tree_id?: string | null
          id?: string
          to_tree_id?: string | null
        }
        Update: {
          created_at?: string | null
          from_tree_id?: string | null
          id?: string
          to_tree_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "grafts_from_tree_id_fkey"
            columns: ["from_tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grafts_to_tree_id_fkey"
            columns: ["to_tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
        ]
      }
      rains: {
        Row: {
          created_at: string | null
          id: string
          intensity: number | null
          reflection: string | null
          tree_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          intensity?: number | null
          reflection?: string | null
          tree_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          intensity?: number | null
          reflection?: string | null
          tree_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rains_tree_id_fkey"
            columns: ["tree_id"]
            isOneToOne: false
            referencedRelation: "trees"
            referencedColumns: ["id"]
          },
        ]
      }
      relics: {
        Row: {
          constellation_id: string | null
          created_at: string | null
          id: string
          symbol_path: string | null
          zine_id: string | null
        }
        Insert: {
          constellation_id?: string | null
          created_at?: string | null
          id?: string
          symbol_path?: string | null
          zine_id?: string | null
        }
        Update: {
          constellation_id?: string | null
          created_at?: string | null
          id?: string
          symbol_path?: string | null
          zine_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "relics_zine_id_fkey"
            columns: ["zine_id"]
            isOneToOne: false
            referencedRelation: "fruits"
            referencedColumns: ["id"]
          },
        ]
      }
      trees: {
        Row: {
          created_at: string | null
          id: string
          score: number | null
          status: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          score?: number | null
          status?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          score?: number | null
          status?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      fires_graveyard: {
        Row: {
          breath_count: number | null
          breath_history: Json | null
          created_at: string | null
          elements: string | null
          emotion_type: string | null
          expired: boolean | null
          id: string | null
          last_emotion: string | null
          revive_count: number | null
          revived_fire_ids: Json | null
          text: string | null
        }
        Insert: {
          breath_count?: never
          breath_history?: never
          created_at?: string | null
          elements?: string | null
          emotion_type?: string | null
          expired?: boolean | null
          id?: string | null
          last_emotion?: never
          revive_count?: never
          revived_fire_ids?: never
          text?: string | null
        }
        Update: {
          breath_count?: never
          breath_history?: never
          created_at?: string | null
          elements?: string | null
          emotion_type?: string | null
          expired?: boolean | null
          id?: string | null
          last_emotion?: never
          revive_count?: never
          revived_fire_ids?: never
          text?: string | null
        }
        Relationships: []
      }
      fires_with_parents: {
        Row: {
          breath_count: number | null
          breath_history: Json | null
          created_at: string | null
          elements: string | null
          emotion_type: string | null
          expired: boolean | null
          id: string | null
          last_emotion: string | null
          parent_id: string | null
          parent_text: string | null
          parent_type: string | null
          resonance_list: Json | null
          revive_count: number | null
          text: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
