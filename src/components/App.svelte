<script>
	import { Router, Route } from 'svelte-routing';
	import { Dashboard } from '../pages/Dashboard.svelte';
import { Auth } from '../pages/Auth.svelte';
</script>

<main>
  <Router>
    <Route path="/dashboard">
      <Dashboard {isLoggedIn} {updateLoggedIn} />
    </Route>
    <Route path="/auth">
      <Auth {isLoggedIn} {updateLoggedIn} />
    </Route>
    <Route path="/">
      <Redirect to="/auth" />;
    </Route>``
  </Router>
</main>
