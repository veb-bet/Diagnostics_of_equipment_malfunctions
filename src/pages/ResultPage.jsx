import React, { useState, useEffect } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";
import "./ResultPage.css";
import { saveAs } from "file-saver";

const Graph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const addNode = (label, position) => {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: label,
          data: { label },
          position,
        },
      ]);
    };

    const addEdgesBetween = (from, to) => {
      setEdges((prevEdges) => [
        ...prevEdges,
        { id: `${from}-${to}`, source: from, target: to },
      ]);
    };

    const P1 = ["F1", "F2", "F3"];
    P1.forEach((node, index) => {
      addNode(node, { x: index * 150, y: 50 });
    });
    addEdgesBetween("F1", "F2");
    addEdgesBetween("F2", "F3");
    addEdgesBetween("F1", "F3");

    const P2 = ["F4", "F5", "F6", "F7"];
    P2.forEach((node, index) => {
      addNode(node, { x: index * 150, y: 200 });
    });
    addEdgesBetween("F4", "F5");
    addEdgesBetween("F5", "F6");
    addEdgesBetween("F6", "F7");
    addEdgesBetween("F4", "F6");
    addEdgesBetween("F5", "F7");
    addEdgesBetween("F2", "F6");

    const P3 = ["F8", "F9", "F10", "F11", "F12"];
    P3.forEach((node, index) => {
      addNode(node, { x: index * 150, y: 350 });
    });
    addEdgesBetween("F8", "F9");
    addEdgesBetween("F9", "F10");
    addEdgesBetween("F10", "F11");
    addEdgesBetween("F11", "F12");
    addEdgesBetween("F8", "F12");
    addEdgesBetween("F9", "F11");
    addEdgesBetween("F2", "F9");

    addNode("S1", { x: 50, y: 500 });
    addNode("S2", { x: 250, y: 500 });
    addNode("S3", { x: 450, y: 500 });
    addNode("S4", { x: 650, y: 500 });

    addEdgesBetween("F3", "S1");
    addEdgesBetween("F6", "S2");
    addEdgesBetween("F10", "S3");
    addEdgesBetween("F12", "S4");
    addEdgesBetween("F1", "S4");
    addEdgesBetween("F5", "S4");
    addEdgesBetween("F5", "S2");
    addEdgesBetween("F3", "S3");
  }, [setNodes, setEdges]);
  const downloadResults = () => {
    const data = {
      nodes,
      edges,
      recommendation: {
        replacePulleys: "Необходимо заменить изношенные валки",
        checkBeltConveyor: "Необходимо проверить и исправить ленту прокатки",
        investigateEngineOverheating: "Изучить причины перегрева двигателя",
        fixSoftwareErrors: "Исправить ошибки программного обеспечения",
      },
    };

    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], {
      type: "application/json;charset=utf-8",
    });
    saveAs(blob, "результаты.json");
  };
  return (
    <div className="result-container">
      <header>
        <h1>Результат обнаружения сбоя</h1>
        <p>Основываясь на введенных данных, вот результат и рекомендация:</p>
      </header>

      <div className="result-content">
        <div style={{ height: "80vh", width: "800px" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          />
        </div>
      </div>

      <div className="buttons-section">
        <button className="download-button" onClick={downloadResults}>
          Скачать
        </button>
        <a href="/history" className="view-history-button">
          Просмотреть историю
        </a>
      </div>
    </div>
  );
};

export default Graph;
