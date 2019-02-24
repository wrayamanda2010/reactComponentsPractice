import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className = "ui container comments" >
    <ApprovalCard>
      <
      CommentDetail author = "Sam"
      date = "Today at 6:00 PM"
      text = "Nice Blog!"
      image = {
        faker.image.avatar()
      }
      />
    </ApprovalCard>
    <ApprovalCard>
      <
      CommentDetail author = "Alex"
      date = "Today at 4:30 PM"
      text = "Well Done."
      image = {
        faker.image.avatar()
      }
      />
    </ApprovalCard>
    <ApprovalCard>
      <
      CommentDetail author = "Jane"
      date = "Today at 1:00 PM"
      text = "You need Gramarly"
      image = {
        faker.image.avatar()
      }
      />
    </ApprovalCard>
  </div>
  );
};

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);
