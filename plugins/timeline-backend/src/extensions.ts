import { createExtensionPoint } from "@backstage/backend-plugin-api";
import { TimelineItem } from "./services";

export interface TimelineQuery {
  entityRef?: string;
  userRef?: string;
  sources?: string[];
  types?: string[];
  since?: Date;
  limit?: number;
}

export interface TimelineDataProvider {
  readonly id: string;
  readonly displayName: string;

  getItems(query: TimelineQuery): Promise<TimelineItem[]>;
}

export interface TimelineExtensionPoint {
  addDataProvider(provider: TimelineDataProvider): void;
}

export const timelineExtensionPoint =
  createExtensionPoint<TimelineExtensionPoint>({
    id: 'timeline.timeline',
  });
