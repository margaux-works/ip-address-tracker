import PropTypes from 'prop-types';

export default function InfoPanel({ data }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow mx-auto max-w-6xl grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32">
      {/* Column 1: IP Address */}
      <div className="text-center lg:border-r-[1px] border-black/10 h-[75px]">
        <p className="text-[#2c2c2c] text-[0.8rem] font-bold tracking-[1.75px] opacity-50">
          IP ADDRESS
        </p>
        <p className="text-[#2c2c2c] text-[1.2rem] font-bold tracking-[-0.232px]">
          {data?.ip}
        </p>
      </div>
      {/* Column 2: Location */}
      <div className="text-center lg:border-r-[1px] border-black/10 h-[75px]">
        <p className="text-[#2c2c2c] text-[0.8rem] font-bold tracking-[1.75px] opacity-50">
          LOCATION
        </p>
        <p className="text-[#2c2c2c] text-[1.2rem] font-bold tracking-[-0.232px]">
          {data?.location?.city}, {data?.location?.region},{' '}
          {data?.location?.postalCode}
        </p>
      </div>
      {/* Column 3: Timezone */}
      <div className="text-center lg:border-r-[1px] border-black/10 h-[75px]">
        <p className="text-[#2c2c2c] text-[0.8rem] font-bold tracking-[1.75px] opacity-50">
          TIMEZONE
        </p>
        <p className="text-[#2c2c2c] text-[1.2em] font-bold tracking-[-0.232px]">
          {data?.location?.timezone}
        </p>
      </div>
      {/* Column 4: ISP */}
      <div className="text-center h-[75px]">
        <p className="text-[#2c2c2c] text-[0.8rem] font-bold tracking-[1.75px] opacity-50">
          ISP
        </p>
        <p className="text-[#2c2c2c] text-[1.2rem] font-bold tracking-[-0.232px]">
          {data?.isp}
        </p>
      </div>
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

//  <div className="bg-white p-4 shadow-md">
//    <p>IP ADDRESS: {data?.ip}</p>
//    <p>
//      LOCATION: {data?.location?.city}, {data?.location?.region},{' '}
//      {data?.location?.postalCode}
//    </p>
//    <p>TIMEZONE: {data?.location.timezone}</p>
//    <p>ISP: {data?.isp}</p>
//  </div>;
