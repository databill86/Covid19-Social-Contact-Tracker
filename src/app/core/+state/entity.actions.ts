import { PhoneContact } from './../models/phone-contact.model';
import { MedicalStatus } from './../models/medical-status';
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

export class CompleteIntro {
  static readonly type = `${prefix} Complete Intro`;
}

export class SetMedicalStatus {
  static readonly type = `${prefix} Set Medical Status`;
  constructor(public status: MedicalStatus) {}
}

export class RemoveDirectContact {
  static readonly type = `${prefix} Remove Direct Contact`;
  constructor(public contact: PhoneContact) {}
}
