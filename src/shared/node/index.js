import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  modifyNodeAction,
  setActiveNodeAction,
} from '../../redux/actions/nodeActions'

const TreeNode = props => {
  const { nodeId, onPositionUpdate } = props
  let selectedNode = null
  let dragStartX = ''
  let dragStartY = ''
  const dispatch = useDispatch()
  const { activeNodeID, connections } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID,
    connections: state.connectorReducer.connections,
  }))

  const onClickDown = event => {
    const { clientX, clientY, target } = event
    dragStartX = clientX
    dragStartY = clientY
    selectedNode = target
  }

  const onClickDrag = e => {
    if (selectedNode) {
      var dx =
        parseInt(selectedNode.getAttribute('cx')) + e.clientX - dragStartX
      var dy =
        parseInt(selectedNode.getAttribute('cy')) + e.clientY - dragStartY
      dragStartX = e.clientX
      dragStartY = e.clientY
      selectedNode.setAttribute('cx', dx)
      selectedNode.setAttribute('cy', dy)
    }
  }

  const onClickUp = () => {
    let newCx = selectedNode.getAttribute('cx')
    let newCy = selectedNode.getAttribute('cy')
    let payload = { cx: Number(newCx), cy: Number(newCy), id: nodeId }
    dispatch(modifyNodeAction(payload))
    selectedNode = null
  }

  const setActiveNode = event => {
    event.stopPropagation()
    dispatch(setActiveNodeAction(nodeId))
  }

  let newProps = Object.assign({}, props)
  newProps.nodeId && delete newProps.nodeId
  newProps.onPositionUpdate && delete newProps.onPositionUpdate

  return (
    <circle
      className='tree-node'
      onMouseDown={onClickDown}
      onMouseMove={onClickDrag}
      onMouseUp={onClickUp}
      onClick={setActiveNode}
      r={activeNodeID === nodeId ? 50 : 30}
      fill={activeNodeID === nodeId ? 'lightblue' : 'white'}
      strokeWidth='3'
      stroke={'black'}
      {...newProps}
    ></circle>
  )
}

export default TreeNode
