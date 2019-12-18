import {
  CREATE_CONNECTION,
  UPDATE_NODE_CONNECTIONS
} from "../../constants/actions";

/**
 * Redux Action.
 * Creates a node to node connection object from the given payload
 * @param {Object} payload
 * @param {number} payload.x1 The origination node's center's X-coordinate
 * @param {number} payload.y1 The origination node's center's Y-coordinate
 * @param {number} payload.x2 The target node's center's X-coordinate
 * @param {number} payload.y2 The target node's center's X-coordinate
 * @param {string} payload.id1 The origination node's ID
 * @param {number} payload.id2 The target node's ID
 */
export const createConnectorAction = payload => ({
  type: CREATE_CONNECTION,
  payload
});

/**
 * Redux Action.
 * Creates a node to node connection object from the given payload
 * @param {Array} connections The updated node connections
 */
export const updateNodeConnectorsAction = connections => ({
  type: UPDATE_NODE_CONNECTIONS,
  payload: connections
});
