import React from "react";

export default function Quote({ quote }) {
  // splits the author string by ","
  const authorParts = quote.author.split(",");

  // grabs just the author name... right now, the api changed and "type.fit" is at the very end of every author. weird. this removes it.
  const author = authorParts[0];
  console.log(author);
  return (
    <div className="animate-fade-in w-2/3 rounded-lg p-5 mb-5 font-medium bg-grey-rgba shadow-equal">
      <p className="text-xl mb-1">{quote.text}</p>
      {author === "type.fit" || !author ? (
        <p className="text-m italic">- Someone Wise</p>
      ) : (
        <p className="text-m italic">- {author}</p>
      )}
    </div>
  );
}
