import { ADD_NODE, REMOVE_NODE, MODIFY_NODE } from "../../constants/actions";

/**
 * Redux Action.
 * Adds and saves a node to local store
 * @param {object} payload The node payload
 * @param {string} payload.title The title of the node
 * @param {string} payload.UUID The UUID of the node
 * @param {number} payload.cx The X-Coordinate of the node's position
 * @param {number} payload.cy The Y-Coordinate of the node's position
 */
export const addNodeAction = payload => ({
  type: ADD_NODE,
  payload
});

/**
 * Redux Action.
 * Removes the node with give nodeID from store
 * @param {string} nodeID The ID of node to be removed
 */
export const removeNodeAction = nodeID => ({
  type: REMOVE_NODE,
  payload: nodeID
});

/**
 * Redux Action.
 * Modifies the node with give ID with the given payload
 * @param {object} payload The node payload
 * @param {string} payload.title The updated title of the node
 * @param {string} payload.id The ID of the node being modified
 * @param {number} payload.cx The updated X-Coordinate of the node's position
 * @param {number} payload.cy The updated Y-Coordinate of the node's position
 */
export const modifyNodeAction = payload => ({
  type: MODIFY_NODE,
  payload
});
