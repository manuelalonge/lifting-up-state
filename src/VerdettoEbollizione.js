import React from 'react';

function VerdettoEbollizione(props) {
  if (props.celsius >= 100) {
    return <p>L'acqua bollirebbe.</p>;
  }
  return <p>L'acqua non bollirebbe.</p>;
}

export default VerdettoEbollizione;
