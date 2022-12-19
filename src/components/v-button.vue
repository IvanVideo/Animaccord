<template>
    <div class="container">
        <div class="btnContainer">
            <!-- <button :disabled="disabled" v-for="item in dataBtn" v-bind:key="item.id" :class="item.className" @click="getValue">{{ item.text
            }}</button> -->
            <button :disabled="disabled" v-for="item in dataBtn" v-bind:key="item.id" :class="(classLink)?`${item.className}`:'btn-link_passed'" @click="getValue">{{ item.text
            }}</button>
            <div class="timer" v-if="timerBtn">{{ timer(time) }}</div>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            running: true,
            time: 180,
            disabled: false,
            classLink: true
        }
    },
    props: {
        dataBtn: {
            type: Array,
            required: true,
        },
        timerBtn: {
            type: Boolean,
            required: true,
        },
        timeMin: {
            type: Number,
            required: true,
        }
    },
    methods: {
        getValue(e) {
            if (e.target.className === 'btn-timer') {
                this.disabled = true
                this.startTimer()
            }
            if (e.target.className === 'btn-link') {
                console.log(e.target.classList,'213123')
                this.classLink = false
                this.isActive = true
            }

        },
        timer(duration) {
            let hrs = ~~(duration / 3600);
            let mins = ~~((duration % 3600) / 60);
            let secs = ~~duration % 60;

            let ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }
            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        },
        startTimer() {
            let interval;
            if (this.running) {
                interval = setInterval(() => {
                    this.time = this.time - 1;
                }, 1000);
            } else if (!this.running) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        },
    }
}
</script>
  
<style>
.container {
    display: flex;
    justify-content: center;
}

.btn-link {
    background: none;
    border: none;
    text-decoration: underline;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 18px;
}

.btn-link_passed {
    background: none;
    border: none;
    text-decoration: underline;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #C4296C;
}

.btn-link:hover {
    cursor: pointer;
    color: #767679;
}

.btn-multi {
    width: 60px;
    height: 60px;
    border-radius: 25px;
    border: none;
    margin-right: 10px;
    margin-bottom: 10px;
}

.btn-multi:hover {
    cursor: pointer;
    opacity: 0.8;
}

@media screen and (max-width: 620px) {
    .btn-multi {
        width: 52px;
        height: 52px;
    }
}

.btn-multi_first {
    background-color: #702C7E;
    background-image: url('~@/assets/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_second {
    background-color: #DF3F3E;
    background-image: url('~@/assets/exit.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_third {
    background-color: #6DD1B0;
    background-image: url('~@/assets/_.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_fourth {
    background-color: #702C7E;
    background-image: url('~@/assets/Group.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_fifth {
    background-color: #DF3F3E;
    background-image: url('~@/assets/Group 549.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_sixth {
    background-color: #0083B6;
    background-image: url('~@/assets/22.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_seventh {
    background-color: #ED732E;
    background-image: url('~@/assets/Vector1.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-multi_eighth {
    background-color: #702C7E;
    background-image: url('~@/assets/Group 503.svg');
    background-repeat: no-repeat;
    background-position: center;
}

.btn-timer {
    width: 326px;
    height: 52px;
    border-radius: 20px;
    font-family: 'Phosphate';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    padding-left: 40px;
    color: #767679;
    background-color: #EFEFEF;
    border: none;
}

.btn-timer:hover {
    opacity: 0.8;
    cursor: pointer;
}

.btn-classic {
    font-family: 'Phosphate';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    width: 270px;
    height: 52px;
    color: #fff;
    border: none;
    border-radius: 20px;
    margin-bottom: 50px;
}

.btn-classic:hover {
    cursor: pointer;
    opacity: 0.8;
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
    color: #767679;
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

.btnContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.timer {
    position: absolute;
    right: 46px;
    top: 13px;
    font-family: 'Phosphate';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    width: 54px;
    height: 26px;
    background-color: #DF3F3E;
    border-radius: 10px;
    color: #fff;
}

.isActive {
    color: #C4296C;
}
</style>
  