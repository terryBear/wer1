export interface ITrackData {
    id?: string;
    isrc?: string | 'ISRC';
    name: string;
    artists: string[];
    albumName: string;
    releaseDate: string;
    platforms: string[];
    source_url: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
  }