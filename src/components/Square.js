import React from 'react';

import { Button } from 'react-bootstrap';

function Square({ value, onClick }) {
  return (
    <Button variant="outline-primary" size="lg" onClick={onClick} style={{ width: '60px', height: '60px', fontSize: '24px' }}>
      {value}
    </Button>
  );
}

export default Square;

