import * as React from "react";
import { useScreenSizeContext } from "src/contexts/ScreenSizeContext";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Controls,
  Background,
} from "react-flow-renderer";
import {
  initialVerticalNodes,
  initialVerticalEdges,
  initialHorizontalNodes,
  initialHorizontalEdges,
} from "./elements";
import classes from "./Delivery.module.scss";

export default function Delivery() {
  const { isMobile } = useScreenSizeContext();
  const initialNodes = isMobile ? initialVerticalNodes : initialHorizontalNodes;
  const initialEdges = isMobile ? initialVerticalEdges : initialHorizontalEdges;

  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = React.useCallback(
    (connection: Connection) => setEdges((els) => addEdge(connection, els)),
    [setEdges]
  );

  return (
    <Wrapper>
      <div id="delivery">
        <Title side="top">How I deliver projects</Title>
        <div className={classes.delivery}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition={isMobile ? "bottom-right" : "bottom-right"}
          >
            <Background color="#aaa" gap={16} />
            {isMobile ? null : <Controls />}
          </ReactFlow>
        </div>
      </div>
    </Wrapper>
  );
}
