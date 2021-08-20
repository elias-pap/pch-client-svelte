<script>
  import { replace } from 'svelte-spa-router';
  import { isLoggedIn } from '../stores';
  import { onMount } from 'svelte';

  onMount(() => {
    if (!$isLoggedIn) {
      replace('/auth');
    }
  });
</script>

<div>Hello from Dashboard</div>