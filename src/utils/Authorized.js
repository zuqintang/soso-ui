import RenderAuthorized from '../components/Authorized';
import { getAuthority, getUserid } from './authority';

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

const userid = getUserid();

export { reloadAuthorized, userid };
export default Authorized;
