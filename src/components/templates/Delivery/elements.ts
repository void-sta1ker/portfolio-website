import { Node, Edge, Position, MarkerType } from "react-flow-renderer";

const initialVerticalNodes: Node[] = [
  {
    id: "vertical-1",
    type: "input",
    data: { label: "Product Backlog" },
    position: { x: 0, y: 0 },
  },
  {
    id: "vertical-2",
    data: { label: "Sprint Planning" },
    position: { x: 0, y: 100 },
  },
  {
    id: "vertical-3",
    data: { label: "Sprint Backlog" },
    position: { x: 0, y: 200 },
  },
  {
    id: "vertical-4",
    sourcePosition: Position.Top,
    targetPosition: Position.Left,
    data: { label: "Sprint (1-4 weeks)" },
    position: { x: 200, y: 250 },
  },
  {
    id: "vertical-5",
    sourcePosition: Position.Left,
    targetPosition: Position.Bottom,
    data: { label: "Daily Scrum" },
    position: { x: 200, y: 150 },
  },
  {
    id: "vertical-6",
    type: "output",
    data: { label: "Finished Work" },
    position: { x: 0, y: 300 },
  },
];

const initialVerticalEdges: Edge[] = [
  {
    id: "vertical-e1-2",
    source: "vertical-1",
    type: "smoothstep",
    target: "vertical-2",
    animated: true,
  },
  {
    id: "vertical-e2-3",
    source: "vertical-2",
    type: "smoothstep",
    target: "vertical-3",
    animated: true,
  },
  {
    id: "vertical-e3-4",
    source: "vertical-3",
    type: "smoothstep",
    target: "vertical-4",
    animated: true,
  },
  {
    id: "vertical-e4-5",
    source: "vertical-4",
    type: "smoothstep",
    target: "vertical-5",
    animated: true,
  },
  {
    id: "vertical-e5-3",
    source: "vertical-5",
    type: "smoothstep",
    target: "vertical-3",
    animated: true,
  },
  {
    id: "vertical-e6-6",
    source: "vertical-3",
    type: "smoothstep",
    target: "vertical-6",
    animated: true,
  },
];

const initialHorizontalNodes: Node[] = [
  {
    id: "horizontal-1",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Product Backlog" },
    position: { x: 0, y: 150 },
  },
  {
    id: "horizontal-2",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Sprint Planning" },
    position: { x: 200, y: 150 },
  },
  {
    id: "horizontal-3",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Sprint Backlog" },
    position: { x: 400, y: 150 },
  },
  {
    id: "horizontal-4",
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
    data: { label: "Sprint (1-4 weeks)" },
    position: { x: 500, y: 65 },
  },
  {
    id: "horizontal-5",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Right,
    data: { label: "Daily Scrum" },
    position: { x: 300, y: 0 },
  },
  {
    id: "horizontal-6",
    targetPosition: Position.Left,
    type: "output",
    data: { label: "Finished Work" },
    position: { x: 700, y: 150 },
  },
];

const initialHorizontalEdges: Edge[] = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-2",
    animated: true,
  },
  {
    id: "horizontal-e2-3",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-3",
    animated: true,
  },
  {
    id: "horizontal-e3-4",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-4",
    animated: true,
  },
  {
    id: "horizontal-e4-5",
    source: "horizontal-4",
    type: "smoothstep",
    target: "horizontal-5",
    animated: true,
  },
  {
    id: "horizontal-e5-3",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-3",
    animated: true,
  },
  {
    id: "horizontal-e6-6",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
];

export {
  initialHorizontalNodes,
  initialHorizontalEdges,
  initialVerticalNodes,
  initialVerticalEdges,
};
