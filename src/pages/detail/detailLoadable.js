import Loadable from 'react-loadable';
import Loading  from '../../components/loading';

const DetailPages = Loadable({
    loader: () => import('./index.js'),
    loading: Loading,
});

export default DetailPages;