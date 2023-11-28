<script context='module'>
  import { supabase } from '@lib/database'
  import { user } from '@stores/session'

  export const load = async () => {
      // fetch props before the component gets loaded
      return {
        props: {
          games: await getGames(),
        }
      }
    }

  async function getGames () {
    const { data, error } = await supabase.from('games').select('*')
    console.log('games', data)
    return data
  }
</script>

<script>
  export let games = []
</script>

<svelte:head>
  <title>Andor: Hry - Textové hry na role, TTRPG online</title>
</svelte:head>

<div class='headline flex'>
  <h1>Hry</h1>
  {#if $user}
    <div>
      <a href='/new-game' class='button'>Vytvořit novou hru</a>
    </div>
  {/if}
</div>

<table id='games'>
  <tr>
    <th>název</th>
    <th>autor</th>
  </tr>
  {#each games as game}
    <tr class='game'>
      <td><div class='name'><a href='/game?id='>{game.name}</a></div></td>
      <td><div class='author'>{game.author}</div></td>
    </tr>
  {:else}
    Žádné hry nenalezeny
  {/each}
</table>

<style>
  .headline {
    justify-content: space-between;
  }
  #games {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 2px;
  }
    th {
      text-align: left;
      padding: 10px 0px;
      font-variation-settings: 'wght' 300;
      color: var(--dim);
    }
      th:first-child {
        padding-left: 20px;
      }
    td {
      background-color: var(--block);
      margin-bottom: 2px;
    }
      .name a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 20px;
      }
      .name a:first-letter {
        text-transform: uppercase;
      }
</style>