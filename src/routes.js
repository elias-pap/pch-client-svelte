import Auth from './pages/Auth.svelte';
import Dashboard from './pages/Dashboard.svelte';
import NotFound from './pages/NotFound.svelte';
import Home from './pages/Home.svelte';

const routes = {
  '/auth': Auth,
  '/dashboard': Dashboard,
  '/': Home,
  '*': NotFound,
};

export { routes };
