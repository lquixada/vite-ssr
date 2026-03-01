
const Plot = ({ data = [10, 40, 25, 70, 45, 90], width = 300, height = 150 }) => {
  // Calculate the spacing between points
  const pading = 10;
  const chartWidth = width - pading * 2;
  const chartHeight = height - pading * 2;
  
  const maxValue = Math.max(...data);
  
  // Generate the SVG path points
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * chartWidth + pading;
    const y = chartHeight - (value / maxValue) * chartHeight + pading;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      {/* The Line */}
      <polyline
        fill="none"
        stroke="#007bff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {/* Data Points (Dots) */}
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * chartWidth + pading;
        const y = chartHeight - (value / maxValue) * chartHeight + pading;
        return (
          <circle key={index} cx={x} cy={y} r="4" fill="#007bff" />
        );
      })}
    </svg>
  );
};

export default Plot;