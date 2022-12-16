<template>
  <div>
    <h1 class="title">Test work</h1>
    <p class="subtitle">by Ivan Ramazanov</p>
    <div class="choice">
      <div class="choice__container" v-for="item in dataCheckbox" v-bind:key="item.id">
        <input class="choice__checkbox" v-bind:id="item.id" type="checkbox" />
        <label class="choice__label" v-bind:for="item.id">{{ item.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataCheckbox: [
        { id: 1, text: 'button link' },
        { id: 2, text: 'button multi-sized' },
        { id: 3, text: 'button timer' },
        { id: 4, text: 'button classic' },
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title {
  text-align: center;
  margin-top: 20px;
}

.subtitle {
  text-align: center;
  font-size: 0.8rem;
}

.choice {
  display: flex;
}

.choice__container {
  display: flex;
  align-items: center;
  margin: 30px auto 0;
}

.choice__checkbox {
  margin-right: 10px;
}

.choice__label:hover {
  cursor: pointer;
}
</style>
