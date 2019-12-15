import { ADD_NODE } from "../../constants/actions";

/**
 * Adds and saves a node to local store
 * @param {object} payload The node payload
 * @param {string} payload.title The title of the node
 * @param {string} payload.UUID The UUID of the node
 */
export const addNodeAction = payload => ({
  type: ADD_NODE,
  payload
});
