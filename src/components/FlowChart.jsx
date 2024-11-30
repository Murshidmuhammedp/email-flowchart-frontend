import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import { customAxios } from '../config/axios';

const FlowChart = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    

    const onNodesChange = (changes) => setNodes((nds) => nds.concat(changes));
    const onEdgesChange = (changes) => setEdges((eds) => addEdge(changes, eds));

    const saveFlow = async () => {
        try {
            const response = await customAxios.post('/api/emails/save-flow', { nodes, edges });
            alert('Flow saved successfully');
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const scheduleEmail = async () => {
        try {
            const response = await customAxios.post('/api/emails/schedule-email', emailData);
            alert('Email scheduled successfully');
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ height: '100vh', width:'100vw' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
            <button onClick={saveFlow} style={{ position: 'absolute', top: 10, right: 10 }}>
                Save Flow
            </button>
        </div>
    );
};

export default FlowChart;
