import React from 'react';
import './participants-table-header.scss';
import { getFormattedHeaders } from 'Redux/participants-ui/participantsUIReducer';
import { connect } from 'react-redux';

export const ParticipantsTableHeaderPure = ({ headers = [], }) => {
  return (
    <tr className='ParticipantsTableHeader'>
      {headers.length && headers.map((header) => {
        return (
          <th className='ParticipantsTableHeader__column-header' key={header}>
            {header}
          </th>
        );
      })}
    </tr>
  );
};

const ParticipantsTableHeader = connect(
  (state) => ({
    headers: getFormattedHeaders(state),
  })
)(ParticipantsTableHeaderPure);

export default ParticipantsTableHeader;
