import React from 'react'

export default function Random_sentance() {

    const quotes = [
        "jdsfekfjdnfjdkfjkndfjkdnf","dbvdhfhdbjdfs","fjcdsnjejf","jkdksfnjdkf","sjkdfjfbnfjn"
    ];

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex];

  return (
    <div>
      {quote} 
    </div>
  )
}
