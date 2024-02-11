<template>
  <div class="element">
    <i>
      <slot name="icono"></slot>
    </i>
    <div class="item">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.ame {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: pink;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: blueviolet;
}

@media (min-width: 1024px) {
  .element {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    color: var(--color-icon); 
    letter-spacing: .5px;
  }

  .element:before {
    content: ' ';
    border-left: 1px solid var(--color-background);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
    letter-spacing: .5px;
  }

  .element:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
    letter-spacing: .5px;
  }

  .element:first-of-type:before {
    display: none;
  }

  .element:last-of-type:after {
    display: none;
  }
}
