<template>
    <div>
        <button v-for="item in dataBtn" v-bind:key="item.id" :class="item.className" @click="getValue">{{ item.text }}</button>
    </div>
</template>
  
<script>

export default {
    props: {
        dataBtn: {
            type: Array,
            required: true,
        },
        link: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        getValue() {
            console.log(this.dataBtn[0].id, '-----')
        },
    }
}
</script>
  
<style>
.btn-classic {
    width: 170px;
    height: 24px;
    color: white;
}

.btn-classic_first {
    background-color: #702C7E;
}

.btn-classic_second {
    background-color: #C4296C;
}

.btn-classic_third {
    background-color: #F4BA46;
}

.btn-classic_fourth {
    background-color: #EFEFEF;
}

.btn-classic_fifth {
    background-color: #0083B6;
}

.btn-classic_sixth {
    background-color: #DF3F3E;
}

.btn-classic_seventh {
    background-color: #ED732E;
}
</style>
  