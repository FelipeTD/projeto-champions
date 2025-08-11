import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics-model';

const database: PlayerModel[] = [
    { 
        id: 1, 
        name: "Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 100,
            pace: 50,
            shooting: 30,
            passing: 20,
            dribbling: 10,
            defending: 5,
            physical: 15
        }
    },
    { 
        id: 2, 
        name: "Ronaldo",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 20,
            shooting: 40,
            passing: 30,
            dribbling: 15,
            defending: 4,
            physical: 20
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<void> => {
    database.push(player);
}

export const deletePlayerById = async (id: number): Promise<boolean> => {
    const index = database.findIndex(player => player.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | undefined> => {
    const index = database.findIndex(player => player.id === id);
    let data = undefined;

    if (index !== -1) {
        database[index].statistics = statistics;
        data = database[index];
    }

    return data;
}