import React, { Suspense } from 'react'
import Title from './Title';

const Plot = React.lazy(() => import('./Plot'));

const SimpleChart = () => {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '10px', width: 'fit-content' }}>
      <Title />
      <Suspense fallback={<p>Loading data...</p>}>
        <Plot />
      </Suspense>
    </div>
  );
};

export default SimpleChart;