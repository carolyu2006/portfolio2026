<template>
    <nav class="road-sign" aria-label="Jump to">
        <div class="road-sign-post">
            <span class="road-sign-pole"></span>
            <button v-for="sign in signs" :key="sign.id" type="button"
                :class="['road-sign-item', `road-sign-item--${sign.id}`]"
                @click="emit('jump', sign.target)">
                <img class="road-sign-shape" :src="`/assets/icons/road-sign/sign-${sign.id}.svg`" alt="">
                <span class="road-sign-label">{{ sign.label }}</span>
            </button>
        </div>
    </nav>
</template>

<script setup>
// Stands at the end of the horizontal row, past the About car. The page decides
// where each sign goes (`jump`, with a section id or 'hero').
const emit = defineEmits(['jump']);

const signs = [
    { id: 'back-to-top', label: 'Back to Top', target: 'hero' },
    { id: 'ai-design', label: 'AI Design', target: 'section1' },
    { id: 'uiux', label: 'UIUX', target: 'uiux' },
    { id: 'animation', label: 'Animation', target: 'interaction' }
];
</script>
