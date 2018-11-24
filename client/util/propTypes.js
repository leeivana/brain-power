import PropTypes from 'prop-types';

export const ClassPropType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacherId: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  dayOfWeek: PropTypes.string.isRequired,
};

export const ClassItemPropType = {
  classItem: PropTypes.shape(ClassPropType),
};

export const ClassesPropType = {
  classes: PropTypes.arrayOf(PropTypes.shape(ClassPropType)).isRequired,
};
