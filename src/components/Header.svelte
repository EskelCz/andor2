<script>
  import { isActive, url } from '@roxi/routify'
</script>

<header>
  <a href='/' id='logo'>
    <img src='./logo.png' alt='Andor2.cz logo'>
  </a>
  <nav>
    <a href={$url('/')} class:active={$isActive('/index')}>Novinky</a>
    <a href={$url('/games')} class:active={$isActive('/games')}>Hry</a>
  </nav>
</header>

<style>
  header {
    position: relative;
    height: 226px;
    background-image: url('./header.jpg');
    background-position: right;
  }
    #logo {
      position: absolute;
      top: 40px;
      left: 50px;
    }
      #logo img {
        width: 190px;
        height: 90px;
      }
    nav {
      position: absolute;
      bottom: 0px;
      left: 30px;
    }
      nav a {
        font-family: 'Alegreya Sans';
        font-variation-settings: 'wght' 600;
        display: inline-block;
        padding: 13px 25px;
        text-decoration: none;
        font-size: 16pt;
        color: #fff;
        text-shadow: 2px 2px 2px #0003;
        opacity: 0.8;
      }
        nav a:hover {
          opacity: 1;          
        }
      nav a.active {
        color: var(--text);
        background-color: var(--panel);
        border-radius: 8px 8px 0px 0px;
        opacity: 1;
        position: relative;
      }
        .active:before, .active:after {
          content: '';
          position: absolute;
          height: 8px;
          width: 16px;
          bottom: 0px;
        }
        .active:after {
          right: -16px;
          border-radius: 0 0 0 8px;
          box-shadow: -8px 0 0 0 var(--panel);
        }
        .active:before {
          left: -16px;
          border-radius: 0 0 8px 0;
          box-shadow: 8px 0 0 0 var(--panel);
        }
</style>