<script>
  import { replace } from 'svelte-spa-router';
  import { isLoggedIn } from '../stores';
  import { onMount } from 'svelte';

  onMount(() => {
    if ($isLoggedIn) {
      replace('/dashboard');
    }
  });
</script>

<div>Hello from Auth</div>
