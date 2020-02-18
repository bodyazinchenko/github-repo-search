import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import { ReactComponent as Star } from './star.svg';

import './styles.css';

const RepoItem = ({ 
  name, 
  description, 
  url, 
  updatedAt, 
  starsCount,
  language
}) => (
  <div className="col-4 mb-4">
    <Card body>
      <CardTitle>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      </CardTitle>
      <CardText>{description}</CardText>
      <div className="repo-summary">
        <div className="mr-4 repo-stars">
          <Star />
          <span className="ml-2">{starsCount}</span>
        </div>
        <div className="mr-4">
          <span className="badge badge-info">{language}</span>
        </div>
        <div>
          Last update: {new Date(updatedAt).toLocaleDateString()}
        </div>
      </div>
    </Card>
  </div>
);

export default RepoItem;
