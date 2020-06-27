<template>
  <header id="header-content">
    <img id="burgermenu" src="../../assets/img/burger.svg" alt="burger">
    <nav class="nav-boxing">
      <span id="closingmenu">X</span>
        <ul>
          <li class="nav-btn">
            <img class="nav-icon" src="../../assets/img/home.png">
            <router-link class="menu-linking" to="/">Home</router-link>
          </li>
          <li class="nav-btn">
            <img class="nav-icon" src="../../assets/img/cat.png">
            <router-link class="menu-linking" to="/categories">Categories</router-link>
          </li>
          <li class="nav-btn">
            <img class="nav-icon" src="../../assets/img/random.png">
            <router-link class="menu-linking" to="/randomizer">Randomizer</router-link>
          </li>
        </ul>
    </nav>
  </header>
</template>


<script>
export default {
  name: "Header"
}

</script>


<style scoped>

</style>