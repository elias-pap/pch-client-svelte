<script>
  import { replace } from 'svelte-spa-router';
  import { isLoggedIn } from '../stores';
  import { onMount } from 'svelte';
  import { Card } from 'smelte';

  onMount(() => {
    if ($isLoggedIn) {
      replace('/dashboard');
    }
  });
</script>

<Card.Card>
  <div class="">Hello from Auth</div>
</Card.Card>
