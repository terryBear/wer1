import { ITrackData } from "../types/ITrackData";
import tracksDB from "./tracks.js";
import usersDB from "./users.js";

const database = {
    usersDB,
    tracksDB
}

export default database;