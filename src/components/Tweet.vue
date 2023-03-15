<template>
    <div class="tweet">
        <div class="tweet__avatar">
            <img :src="`https://i.pravatar.cc/100?u=${tweet}`" alt="" />
        </div>
        <div class="tweet__content">
            <div class="tweet__header">
                <span class="tweet__author">Franzi Musterfrau</span>
                <span class="tweet__timestamp">vor 1 Minute</span>
            </div>
            <div class="tweet__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam
                tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc. Sed euismod, nunc ut
                aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
            </div>
        </div>
    </div>
</template>