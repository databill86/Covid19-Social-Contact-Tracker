import { TimelineEvent } from './../models/timeline-event';

const prefix = '[ENTIY]';

export class GetTimeline {
  static readonly type = `${prefix} Get Timeline`;
}

export class AddTimelineEvent {
  static readonly type = `${prefix} Add Timeline Event`;
  constructor(public event: TimelineEvent) {}
}

export class CheckIn {
  static readonly type = `${prefix} Check In`;
}

export class CheckOut {
  static readonly type = `${prefix} Check Out`;
}