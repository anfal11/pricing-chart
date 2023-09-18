import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
  return (
    <li className="mr-6 cursor-pointer p-4 hover:bg-slate-500 hover:text-white">
      <a href={path}></a> {name}
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}
export default Link;
