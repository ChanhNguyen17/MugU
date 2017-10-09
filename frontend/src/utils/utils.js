import moment from 'moment';

const getTimeDeltaString = (time) => {
  const duration = moment.duration(moment.utc(time).diff(moment(new Date())));
  const deltaMs = moment.utc(duration.asMilliseconds());
  const deltaHours = deltaMs.hours();
  const deltaMinutes = deltaMs.minutes();

  let delta = '';
  if (deltaHours > 0) {
    delta += `${deltaHours} hours `;
  }

  delta += `${deltaMinutes} minutes`;

  return delta;
};

const formatDate = date => (moment(date).format('MMMM D, HH:mm'));

export {
  getTimeDeltaString,
  formatDate,
};
