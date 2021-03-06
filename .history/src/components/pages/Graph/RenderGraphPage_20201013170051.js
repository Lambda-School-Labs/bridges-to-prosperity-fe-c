import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraphPage = () => {
  const data = [
    {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
        },
      },
    },
  ];

  const layout = {
    width: 400,
    height: 200,
    title: 'Test Graph',
    font: { size: 11 },
  };

  return (
    <Plot data={data} layout={layout} config={{ displayModeBar: true }} />
  );
};

export default RenderGraphPage;
