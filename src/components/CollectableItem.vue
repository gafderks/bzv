<script setup lang="ts">
import { useCollectableStore, type CollectableItem } from '@/stores/collectable';
import { computed } from 'vue';
import { useQRCode } from '@vueuse/integrations/useQRCode';

const collectableStore = useCollectableStore();


interface Props {
    value: CollectableItem;
    itemIndex: number;
    showQrKey?: boolean;
}

const props = withDefaults(defineProps<Props>(),
    {
        showQrKey: false,
    }
);

const paasei = import.meta.env.BASE_URL + 'img/paasei.png';
const rotation = computed<string>(() => {
    const step = 1 / collectableStore.items.length;
    return `${step * props.itemIndex}turn`;
});

const flipX = computed<number>(() => {
    return props.itemIndex % 2 === 0 ? -1 : 1;
});

const flipY = computed<number>(() => {
    const mod4 = props.itemIndex % 4;
    return mod4 === 2 || mod4 === 3 ? -1 : 1;
});


const pageUrl = new URL(window.location.href);
pageUrl.hash = '';

const qrcode = useQRCode(`${pageUrl}#found=${props.value.key}`);
</script>
<template>
    <div class="col">
        <div :id="value.key" :class="['card', { 'found': value.found, 'key': showQrKey }]" ref="card">
            <div class="qr" v-if="showQrKey">
                <div>Code: <code>{{ value.key }}</code></div>
                <img :src="qrcode" alt="QR code" />
            </div>
            <div class="img-container outline" v-if="value.found || showQrKey">
                <img :src="value.imageUrl" />
            </div>
            <div class="img-container" v-else>
                <img :src="paasei" :style="{'--rotation': rotation, '--flipx': flipX, '--flipy': flipY}" />
            </div>
            <div class="card-body d-print-none">
                <h5 class="card-title">{{ value.name }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
    --shadow: drop-shadow(5px 5px 5px #222);

    .qr {
        font-size: 1.5em;
    }

    .img-container {
        // background-color: rgba(0, 0, 0, .2);
        // border-radius: 50%;
        width: 120px;
        height: 155px;
        text-align: center;
        margin: 0 auto;
        filter: drop-shadow(12px 12px 5px rgba(0, 0, 0, 0.5));
        --rotation: 0turn;
        --flipx: 1;
        --flipy: 1;
        
        &.outline img {
            outline: 4px solid gold;
            border-radius: 50%;
        }


        img {
            // filter: brightness(0.05) var(--shadow);
            // box-shadow: 12px 12px 5px 0 rgba(0, 0,0,0.5); 
            filter: hue-rotate(var(--rotation));
            transform: scaleX(var(--flipx)) scaleY(var(--flipy));
            user-select: none;
            pointer-events: none;
            max-width: 90%;
            max-height: 200px;
            margin-top: 20px;
        }
    }

    .card-body {
        margin-top: 20px;

        h5 {
            margin: 15px 0;
            display: inline;
            font-size: 1.2rem;
            white-space:nowrap;
        }
    }

    .card-title {
        text-shadow: 0 0 10px var(--bs-body-color);
        color: transparent;
        user-select: none;
    }

    &.found,
    &.key {
        
        .card-title {
            text-shadow: none;
            color: var(--bs-body-color);
        }
    }
}

@media print {
    .card {
        box-shadow: none;
        border: 1px solid black;
        padding-bottom: 50px;
        page-break-inside: avoid;
    }
}
</style>