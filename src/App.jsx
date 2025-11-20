import React from 'react';
import styled from 'styled-components';


const QuoteBoxWrapper = styled.div`

  background: #ffff;
  padding: 20px;
  
  border-radius: 12px;
  
  max-width: 400px;
  margin: 20px auto;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
`;

const QuoteAuthor = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  
  color: #555;
  text-align: right;
`;

function QuoteBox() {
  return (
    
    <QuoteBoxWrapper>
      
      <QuoteText>
        
        "The only limit to our realization of tomorrow is our doubts of today."
        
      </QuoteText>
      
      <QuoteAuthor>- Franklin D. Roosevelt</QuoteAuthor>
      
    </QuoteBoxWrapper>
  );
}

export default QuoteBox;

