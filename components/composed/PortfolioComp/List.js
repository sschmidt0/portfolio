import PropTypes from 'prop-types';

export const List = ({ listArray }) => (
  <ul>
    { listArray && listArray.map((listArrayItem, index) => <li key={ index }>{ listArrayItem }</li>) }
  </ul>
);

List.propTypes = {
  listArray: PropTypes.array,
};
