
export interface TimelineItemData {
  title: string;
  description?: string;
  points?: string[];
}

export interface ModuleData {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  content: TimelineItemData[];
}

export interface MaterialData {
  icon: string;
  title: string;
  description: string;
}