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
 */
export const createConnectorAction = payload => ({
  type: CREATE_CONNECTION,
  payload
});

/**
 * Redux Action.
 * Creates a node to node connection object from the given payload
 * @param {string} ndoeID The node whose connectors are to be updated
 */
export const updateNodeConnectorsAction = nodeID => ({
  type: UPDATE_NODE_CONNECTIONS,
  payload: nodeID
});
