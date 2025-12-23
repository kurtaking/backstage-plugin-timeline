export interface TimelineItem {
  id: string;
  title: string;
}

export interface TimelineService {
  timeline(): Promise<{ items: TimelineItem[] }>;
}
