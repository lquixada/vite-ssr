import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import React, { Suspense } from 'react'
import Title from './Title';

const Plot = React.lazy(() => import('./Plot'));

/* Printing values for debugging */
console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname);

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