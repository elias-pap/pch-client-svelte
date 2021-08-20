<script>
  import { replace } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  onMount(() => {
    replace('/auth');
  });
</script>
