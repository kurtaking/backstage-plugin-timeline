export interface TimelineItem {
  id: string;
  title: string;
}

export interface TimelineService {
  listTimelineItems(): Promise<{ items: TimelineItem[] }>;
}
