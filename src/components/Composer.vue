<template>
    <form class="composer">
        <label class="composer__prompt">Was geht?</label>
        <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..." />
        <div class="composer__actions">
            <div class="composer__stats stats">
                <span class="stats__counter">0</span>
                <span class="stats__max">/ 160</span>
            </div>
            <button disabled class="btn btn--primary">
                Tweet veröffentlichen
            </button>
        </div>
    </form>
</template>