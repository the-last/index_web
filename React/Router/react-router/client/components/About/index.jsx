
import './About.scss';
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const PEEPS = [
  {id: 0, name: 'Michelle', friends: [1, 2, 3]},
  {id: 1, name: 'Sean', friends: [0, 3]},
  {id: 2, name: 'Kim', friends: [0, 1, 3]},
  {id: 3, name: 'David', friends: [1, 2]},
];

const find = id => PEEPS.find(p => p.id === id);

const About = () =>
  <Router>
    {<div> 
      {[0, 1, 2, 3].map(id =>
        <Person key={id} match={{params: {id: id}, url: ''}} />
      )}
    </div>}
  </Router>;

let Person = ({match}) => {
  let person = find(match.params.id);
  return (
    <div>
      <h3>
        {person.name} ’s Friends
      </h3>
      <ul>
        {person.friends.map(id =>
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default About;
