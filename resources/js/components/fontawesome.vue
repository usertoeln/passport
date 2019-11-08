<template>
    <div class="rtl text-right">
        <p>این صفحه در رابطه با استفاده از فونت های Fontawesome می باشد .برای استفاده از این امکان باید در مرحله اول
            کتابخانه های مورد نیاز را نصب کنید : </p>
        <ul class="ltr text-left">
            <li> npm i --save @fortawesome/fontawesome-svg-core</li>
            <li> npm i --save @fortawesome/free-solid-svg-icons</li>
            <li> npm i --save @fortawesome/vue-fontawesome</li>
            <li> npm i --save @fortawesome/free-brands-svg-icons</li>
            <li> npm i --save @fortawesome/free-regular-svg-icons</li>
        </ul>
        <p>در مرحله بعد در فایل اصلی برنامه باید موارد زیر را اضافه کنیم :</p>
        <ul class="ltr text-left">
            <li>import {library} from '@fortawesome/fontawesome-svg-core'</li>
            <li> import {faArchive, faChild, faCircle, faCoffee, faUserSecret ,faAngry} from
                '@fortawesome/free-solid-svg-icons'
            </li>
            <li>import {faComment} from '@fortawesome/free-regular-svg-icons'</li>
            <li>import {faTwitter} from '@fortawesome/free-brands-svg-icons'</li>
            <li>import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from
                '@fortawesome/vue-fontawesome'
            </li>
        </ul>
        <p>و برای استفاده از امکانات باید دستورات زیر را اضافه کنیم :</p>
        <ul class="ltr text-left">
            <li>library.add(faUserSecret, faCoffee, faChild, faCircle, faArchive,faTwitter,faComment,faAngry);</li>
            <li>Vue.component('font-awesome-icon', FontAwesomeIcon)</li>
            <li>Vue.component('font-awesome-layers', FontAwesomeLayers)</li>
            <li>Vue.component('font-awesome-layers-text', FontAwesomeLayersText)</li>
        </ul>
        <div class="text-center">
            <ul>
                <li>
                    <font-awesome-icon icon="coffee" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon icon="coffee" size="1x" flip="horizontal"/>
                </li>
                <li>
                    <font-awesome-icon icon="child" size="4x"/>
                </li>
                <li>
                    <font-awesome-icon icon="child" transform="shrink-4 down-2 right-2" :mask="['fas', 'circle']"
                                       size="4x"/>
                </li>
                <li>
                    <font-awesome-icon icon="angry" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon icon="circle" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon icon="archive" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon :icon="['fab', 'twitter']" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon :icon="['far','comment']" size="1x"/>
                </li>
                <li>
                    <font-awesome-icon :icon="queen" size="4x"/>
                </li>
                <li>
                    <font-awesome-layers full-width class="fa-4x">
                        <font-awesome-icon :icon="['fas', 'archive']"/>
                        <font-awesome-layers-text class="text-danger" transform="down-3 shrink-14" value="SECRET"/>
                    </font-awesome-layers>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {faChessQueen} from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "fontawesome",
        computed: {
            queen() {
                return faChessQueen
            }
        }

    }
</script>

<style scoped>
    .rtl {direction : rtl;}
    .ltr {direction : ltr;}
    li{
        margin-bottom: 20px;
        list-style: none;
    }
</style>