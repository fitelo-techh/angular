export interface Subscription {
  planName?: string;
  discount?: number;
  startDate?: string;
  price?: number;
  extension?: number;
  pause_history?: { start: string, end: string }[];
  transactionId?: string;
}
