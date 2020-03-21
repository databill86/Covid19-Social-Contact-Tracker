import { Contact } from './contact.model';
import {Moment} from 'moment';

export interface TimelineEvent {
    type: TimelineEventType;
    timestamp: Moment;
    from?: string;
    to?: string;
    content?: string;
    directContacts?: number;
    indirectContacts?: number;
    contacts?: Contact[];
}

export enum TimelineEventType {
    checkIn = 'checkIn',
    checkOut = 'checkOut',
    travel = 'travel',
    contact = 'contact',
    note = 'note',
    activity = 'activity',
}