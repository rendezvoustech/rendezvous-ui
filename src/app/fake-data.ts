import { Participant, Rendezvous } from "./types";

export const fakeParticipants: Participant[] = [{
    id: 1,
    usernames: ['harry@potter.co.uk'],
    name: 'Harry Potter'

}, {
    id: 2,
    usernames: ['tolkien@gmail.com'],
    name: 'J.R.R. Tolkien'
}, {
    id: 3,
    usernames: ['pullman@gmail.com', 'philip.pullman@hotmail.com'],
    name: 'Philip Pullman'
}];

export const fakeRendezvous: Rendezvous[] = [{
    id: 42,
    ownerId: 1,
    name: 'Birthday',
    participantIds: [1, 2]
}, {
    id: 43,
    ownerId: 1,
    name: 'Wedding',
    participantIds: [1, 2, 3]
}, {
    id: 44,
    ownerId: 2,
    name: 'Dinner',
    participantIds: [3, 2]
}];