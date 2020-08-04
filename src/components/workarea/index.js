import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TreeNode from '../../shared/node/'
import { setActiveNodeAction } from '../../redux/actions/nodeActions'
import Connector from '../../shared/connector/'
import './workarea.scss'

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50)
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth)

  let { nodes, conn, translateX, translateY } = useSelector(state => ({
    nodes: state.nodeReducer.nodes,
    conn: state.connectorReducer.connections,
    translateX: state.workspaceReducer.translateX,
    translateY: state.workspaceReducer.translateY,
  }))

  const [connections, updateConnections] = useState(conn)

  const dispatch = useDispatch()

  window.onresize = () => {
    changeHeight(window.innerHeight - 50)
    changeWidth(window.innerWidth)
  }

  const removeActiveNode = () => {
    dispatch(setActiveNodeAction(null))
  }

  const handlePositionUpdate = (nodeID, cx, cy) => {
    let p = [...connections]
    if (p.length) {
      for (let i = 0; i < p.length; i++) {
        if (p[i].id1 === nodeID) {
          p[i] = {
            ...p[i],
            x1: Number(cx),
            y1: Number(cy),
          }
        } else if (connections[i].id2 === nodeID) {
          p[i] = {
            ...p[i],
            x2: Number(cx),
            y2: Number(cy),
          }
        }
      }
    }
    updateConnections(p)
  }

  return (
    <React.Fragment>
      <svg
        width={workSpaceWidth}
        height={workSpaceHeight}
        onClick={removeActiveNode}
        className='workarea'
      >
        <g transform={`translate(${translateX},${translateY})`}>
          {connections.length > 0 &&
            connections.map((connection, i) => {
              console.log('hmm k')
              return <Connector {...connection} key={i} />
            })}
          {nodes.length > 0 &&
            nodes.map(node => (
              <TreeNode
                key={node.id}
                cx={node.cx}
                cy={node.cy}
                nodeId={node.id}
                onPositionUpdate={handlePositionUpdate}
              />
            ))}
        </g>
      </svg>
    </React.Fragment>
  )
}

export default WorkArea
