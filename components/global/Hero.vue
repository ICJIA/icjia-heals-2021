<template>
  <div class="hero-section">
    <div
      class="hero-section-text"
      aria-label="Illinois HEALS: A multi-year initiative to address child and youth victimization"
    >
      <h4>
        <span class="hero-highlight">H</span>elping
        <span class="hero-highlight">E</span>veryone
        <span class="hero-highlight">A</span>ccess
        <span class="hero-highlight">L</span>inked
        <span class="hero-highlight">S</span>ystems
      </h4>
      <span class="brand-state hero">Illinois</span>
      <span class="brand-name hero">HEALS</span>
      <div>
        <img :src="require('~/assets/img/logo.png')" height="120" />
      </div>

      <h3 class="mt-3 hero-sub">
        A multi-year initiative to address child and youth victimization
      </h3>
    </div>
  </div>
</template>

<style>
.hero-section {
  background: url('/heart.jpg') 50% no-repeat;
  background-size: cover;
  height: 650px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  /* margin-top: 71px; */
}

img:before {
  content: attr(alt);
}

.hero-section-text {
  color: #fff;
  margin-top: -125px;
}

.brand-name.hero,
.brand-state.hero {
  font-size: 75px;
}

.hero-highlight {
}

h4 {
  color: #222;
  font-weight: 900;
}

.hero-sub {
  color: #fff;
  /* background: #fff;
        padding: 3px 5px 3px 5px; */
  font-weight: 800;
}
</style>
