import { isTryStatement } from "typescript";
import throwCustomError, { ErrorTypes } from "../helper/error.helper.js";
import { ITrackData } from "../types/ITrackData";
import externalApi from "./metadata.api.js";
import database from "../datasources/database.js";

const DB = database.tracksDB;

export const getTrackByNameAndArtist = async (_: any, { name, artists }: Partial<ITrackData>) => {
    // Check if the track is in the database
    const existingTrack = DB.find((track: ITrackData) => track.name === name && track.artists.includes(artists[0]));

    if (existingTrack) {
      return existingTrack;
    } else {
      // If not in the database, fetch from external API and create in the database
      const trackData: ITrackData[] = await externalApi.getTrackData({ name, artists });

      console.log('trackData', trackData);

      if (trackData) {

        const tracks = [...trackData].map((track: any) => {
          track.artists = [artists];
          return createTrackInDatabase(track);
        });
        return tracks;
      } else {
        throwCustomError('Track not found in the external API.', ErrorTypes.NOT_FOUND);
      }
    }
}

export const getAllTracks = () => DB;
export const createTrack = (_: any, { name, artists, duration, isrc, releaseDate }: ITrackData) => {
    const newTrack = createTrackInDatabase({ name, artists, duration, isrc, releaseDate });
    return newTrack;
}

// Update a specific Track by internal ID
export const updateTrackById = (_: any, { id, name, artists, duration, isrc, releaseDate }: ITrackData) => {
  const index = DB.findIndex((track: ITrackData) => track.id === id);

  if (index !== -1) {
    const updatedTrack = {
      ...DB[index],
      name,
      artists,
      duration,
      isrc,
      releaseDate,
      updatedAt: new Date().toISOString()
    };

    DB[index] = updatedTrack;
    return updatedTrack;
  } else {
    throwCustomError('Track not found.', ErrorTypes.NOT_FOUND);
  }
}

export const deleteTrackById = (_: any, { id }: Partial<ITrackData>) => {
    const index = DB.findIndex((track: ITrackData) => track.id === id);

    if (index !== -1) {
      const deletedTrack = DB.splice(index, 1)[0];
      return deletedTrack;
    } else {
      throwCustomError('Track not found.', ErrorTypes.NOT_FOUND);
    }
}

function createTrackInDatabase(trackData: Partial<ITrackData>): ITrackData {
  const newTrack: any = {
    id: String(DB.length + 1),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...trackData
  };

  if (!newTrack) {
    return throwCustomError('Track not found.', ErrorTypes.NOT_FOUND);
  }

  DB.push(newTrack);
  return newTrack;
}

