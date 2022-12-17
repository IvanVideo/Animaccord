<template>
  <div>
    <h1 class="title">Test work</h1>
    <p class="subtitle">by Ivan Ramazanov</p>
    <div class="choice">
      <div class="choice__container" v-for="item in dataCheckbox" v-bind:key="item.id">
        <label class="choice__label" v-bind:for="item.id">
          <input v-model="checked" class="choice__radio" v-bind:id="item.id" :value="item.value"
            @click="getValueCheckbox" type="radio" />
          {{ item.text }}</label>
      </div>
    </div>
    <div class="content">
      <div v-if="btnStatus === 'btnLink'">
        <a><Button :dataBtn="btnLink" /></a>
      </div>
      <div class="container" v-if="btnStatus === 'btnMulti'">
        <Button :dataBtn="btnMulti" />
      </div>
      <div v-if="btnStatus === 'btnTimer'">
        <Button :dataBtn="btnTimer" />
      </div>
      <div class="container" v-if="btnStatus === 'btnClassic'">
        <Button :dataBtn="btnClassic" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './components/v-button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      dataCheckbox: [
        { id: 1, text: 'button link', value: 'btnLink' },
        { id: 2, text: 'button multi-sized', value: 'btnMulti' },
        { id: 3, text: 'button timer', value: 'btnTimer' },
        { id: 4, text: 'button classic', value: 'btnClassic' },
      ],
      btnLink: [{ id: 1, text: 'Напомнить PIN-код', className: 'btn-link' }],
      btnMulti: [
        { id: 1, className: 'btn-multi btn-multi_first' },
        { id: 2, className: 'btn-multi btn-multi_second' },
        { id: 3, className: 'btn-multi btn-multi_third' },
        { id: 4, className: 'btn-multi btn-multi_fourth' },
        { id: 5, className: 'btn-multi btn-multi_fifth' },
        { id: 6, className: 'btn-multi btn-multi_sixth' },
        { id: 7, className: 'btn-multi btn-multi_seventh' },
        { id: 8, className: 'btn-multi btn-multi_eighth' },
      ],
      btnTimer: [{ id: 1, text: 'Повторное письмо', className: 'btn-timer' }],
      btnClassic: [
        { id: 1, text: 'отправить письмо', className: 'btn-classic btn-classic_first' },
        { id: 2, text: 'отправить письмо', className: 'btn-classic btn-classic_second' },
        { id: 3, text: 'отправить письмо', className: 'btn-classic btn-classic_third' },
        { id: 4, text: 'отправить письмо', className: 'btn-classic btn-classic_fourth' },
        { id: 5, text: 'отправить письмо', className: 'btn-classic btn-classic_fifth' },
        { id: 6, text: 'отправить письмо', className: 'btn-classic btn-classic_sixth' },
        { id: 7, text: 'отправить письмо', className: 'btn-classic btn-classic_seventh' },
      ],
      checked: [],
      btnStatus: ''
    }
  },
  methods: {
    getValueCheckbox(e) {
      this.btnStatus = e.target.value;
      console.log(e.target.value, '-----')
    },
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

@media screen and (max-width: 620px) {
  .choice {
    flex-wrap: wrap;
  }

  .choice__container {
    width: 150px;
  }
}

.choice__radio {
  margin-right: 10px;
}

.choice__radio:hover {
  cursor: pointer;
}

.choice__label:hover {
  cursor: pointer;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
}

.content {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
