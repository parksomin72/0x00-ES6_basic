import ClassRoom from "./0-classroom.js";

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  return rooms;
}

export default initializeRooms;
