import moment from 'moment';

const getHoursDelta = (time) => {
  const duration = moment.duration(moment.utc(time).diff(moment(new Date())));
  const hoursDelta = Math.floor(duration.asHours());

  return hoursDelta;
};

const formatDate = date => (moment(date).format('MMMM D, HH:mm'));

export {
  getHoursDelta,
  formatDate,
};
