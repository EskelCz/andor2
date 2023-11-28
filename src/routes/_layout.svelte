<script>
  import Header from '@components/Header.svelte'
  import Sidebar from '@components/Sidebar.svelte'
</script>


<div id='wrapper'>
  <main>
    <Header />
    <div id='content'>
      <slot></slot>
    </div>
  </main>
  <Sidebar />
</div>
<footer>v {window.__APP_VERSION__}</footer>


<style>
  #wrapper {
    width: 100%;
    margin: auto;
    display: flex;
  }

  main {
    flex: 1;
    background-color: var(--panel);
    border-radius: 0px 0px 10px 10px;
  }

  footer {
    margin-top: 20px;
    padding: 20px;
    text-align: center;
  }

  #content {
    padding: 40px 60px 60px 60px;
  }
</style>