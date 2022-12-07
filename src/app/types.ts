export interface Participant {
    id: number | undefined;
    usernames: string[];
    name: string;
}

export interface Rendezvous {
    id: number;
    ownerId: number;
    name: string;
    participantIds: number[];
}

export interface RendezvousRequest {
    ownerId: number;
    name: string;
}

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    roles: string[];
}