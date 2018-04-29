import createHistory from 'history/createBrowserHistory';

export default createHistory({
  // Change right half of base name once deployed?
  basename: process.env.NODE_ENV === 'development' ? '' : '/teachers-pet'
});