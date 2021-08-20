<script>
  import { replace } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  onMount(() => {
    if (location.pathname === '/') {
      replace('/auth');
    } else {
      location.pathname = '/';
      replace('/');
    }
  });
</script>
