import React from 'react';

const CardConcept = ({ imageSrc, title, content, tags, listItems }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-4">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardConcept;