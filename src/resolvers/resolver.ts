import {
  createTrack,
  deleteTrackById,
  getAllTracks,
  getTrackByNameAndArtist,
  updateTrackById,
} from "./track.js";
import { createUser, deleteUserById, getUserById, getUsers, updateUserById } from "./user.js";

export default {
  Query: {
    getUsers: getUsers,
    getUserById: getUserById,
    getTrackByNameAndArtist: getTrackByNameAndArtist,
    getAllTracks: getAllTracks,
  },
  Mutation: {
    createUser: createUser,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById,
    createTrack: createTrack,
    updateTrackById: updateTrackById,
    deleteTrackById: deleteTrackById,
  },
};
