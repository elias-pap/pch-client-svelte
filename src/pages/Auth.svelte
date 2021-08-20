<script>
  import { replace } from 'svelte-spa-router';
  import { isLoggedIn } from '../stores';

  if (isLoggedIn) {
    replace('/dashboard');
  }
</script>

<div>Hello from Auth</div>
