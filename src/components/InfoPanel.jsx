import PropTypes from 'prop-types';

export default function InfoPanel({ data }) {
  return (
    <div className="bg-white p-4 shadow-md">
      <p>IP ADDRESS: {data?.ip}</p>
      <p>
        LOCATION: {data?.location?.city}, {data?.location?.region},{' '}
        {data?.location?.postalCode}
      </p>
      <p>TIMEZONE: {data?.location.timezone}</p>
      <p>ISP: {data?.isp}</p>
    </div>
  );
}

InfoPanel.propTypes = {
  data: PropTypes.shape({
    ip: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired,
    }),
    isp: PropTypes.string.isRequired,
  }),
};
