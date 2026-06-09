<template>
    <form class="contact-form" novalidate @submit.prevent="prepareEmail">
        <div class="form-header">
            <h2>{{ $t('contact.form.title') }}</h2>
            <p>{{ $t('contact.form.intro') }}</p>
        </div>

        <div class="form-grid">
            <div class="form-field" :class="{ 'form-field-invalid': fieldErrorKeys.name }">
                <label class="sr-only" for="contact-name">
                    {{ $t('contact.form.name') }}
                </label>
                <input
                    id="contact-name"
                    v-model="form.name"
                    :aria-describedby="fieldErrorKeys.name ? 'contact-name-error' : null"
                    :aria-invalid="Boolean(fieldErrorKeys.name)"
                    :aria-label="$t('contact.form.name')"
                    aria-required="true"
                    autocomplete="name"
                    name="name"
                    :placeholder="$t('contact.form.name')"
                    required
                    type="text"
                />
                <p v-if="fieldErrorKeys.name" id="contact-name-error" class="field-error">
                    {{ fieldErrors.name }}
                </p>
            </div>

            <div class="form-field" :class="{ 'form-field-invalid': fieldErrorKeys.email }">
                <label class="sr-only" for="contact-email">
                    {{ $t('contact.form.email') }}
                </label>
                <input
                    id="contact-email"
                    v-model="form.email"
                    :aria-describedby="fieldErrorKeys.email ? 'contact-email-error' : null"
                    :aria-invalid="Boolean(fieldErrorKeys.email)"
                    :aria-label="$t('contact.form.email')"
                    aria-required="true"
                    autocomplete="email"
                    name="email"
                    :placeholder="$t('contact.form.email')"
                    required
                    type="email"
                />
                <p v-if="fieldErrorKeys.email" id="contact-email-error" class="field-error">
                    {{ fieldErrors.email }}
                </p>
            </div>
        </div>

        <div class="form-field" :class="{ 'form-field-invalid': fieldErrorKeys.goal }">
            <label class="sr-only" for="contact-goal">
                {{ $t('contact.form.goal') }}
            </label>
            <select
                id="contact-goal"
                v-model="form.goal"
                :class="{ 'is-empty': !form.goal }"
                :aria-describedby="fieldErrorKeys.goal ? 'contact-goal-error' : null"
                :aria-invalid="Boolean(fieldErrorKeys.goal)"
                :aria-label="$t('contact.form.goal')"
                aria-required="true"
                name="goal"
                required
            >
                <option value="" disabled>
                    {{ $t('contact.form.goal') }}
                </option>
                <option v-for="goal in goals" :key="goal">
                    {{ goal }}
                </option>
            </select>
            <p v-if="fieldErrorKeys.goal" id="contact-goal-error" class="field-error">
                {{ fieldErrors.goal }}
            </p>
        </div>

        <div class="form-field">
            <label class="sr-only" for="contact-message">
                {{ $t('contact.form.message') }}
            </label>
            <textarea
                id="contact-message"
                v-model="form.message"
                :aria-label="$t('contact.form.message')"
                name="message"
                :placeholder="$t('contact.form.message')"
                rows="6"
            ></textarea>
        </div>

        <button class="btn btn-primary" :disabled="isSubmitting" type="submit">
            {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
        </button>

        <p v-if="submitMessage" class="form-note" :class="`form-note-${submitState}`" role="status">
            {{ submitMessage }}
        </p>
    </form>
</template>

<script>
    import {
        createContactFieldErrors,
        createContactFormValues,
        hasContactFormAccessKey,
        submitContactForm,
        validateContactForm,
    } from '../../services/contactForm'

    export default {
        data() {
            return {
                isSubmitting: false,
                submitState: 'idle',
                submitMessageKey: '',
                submitMessageText: '',
                fieldErrorKeys: createContactFieldErrors(),
                form: createContactFormValues(),
            }
        },
        computed: {
            goals() {
                return this.$tm('contact.form.goals')
            },
            fieldErrors() {
                return Object.fromEntries(
                    Object.entries(this.fieldErrorKeys).map(([field, key]) => [
                        field,
                        key ? this.$t(key) : '',
                    ])
                )
            },
            submitMessage() {
                if (this.submitMessageKey) {
                    return this.$t(this.submitMessageKey)
                }

                return this.submitMessageText
            },
        },
        methods: {
            setSubmitMessage({ key = '', text = '' } = {}) {
                this.submitMessageKey = key
                this.submitMessageText = text
            },
            validateForm() {
                const result = validateContactForm(this.form)

                this.form = result.values
                this.fieldErrorKeys = result.errors

                return result.isValid
            },
            async prepareEmail() {
                if (this.isSubmitting) {
                    return
                }

                if (!this.validateForm()) {
                    this.submitState = 'error'
                    this.setSubmitMessage({ key: 'contact.form.invalid' })
                    return
                }

                if (!hasContactFormAccessKey()) {
                    this.submitState = 'error'
                    this.setSubmitMessage({ key: 'contact.form.setupError' })
                    return
                }

                this.isSubmitting = true
                this.submitState = 'idle'
                this.setSubmitMessage()

                try {
                    await submitContactForm(this.form)
                    this.submitState = 'success'
                    this.setSubmitMessage({ key: 'contact.form.success' })
                    this.form = createContactFormValues()
                } catch (error) {
                    this.submitState = 'error'
                    this.setSubmitMessage({
                        text:
                            error.message ||
                            this.$t('contact.form.genericError'),
                    })
                } finally {
                    this.isSubmitting = false
                }
            },
        },
    }
</script>

<style scoped>
    .contact-form {
        display: grid;
        gap: 1rem;
        padding: clamp(1.5rem, 4vw, 2.35rem);
        border: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
        border-radius: var(--radius-md);
        background: color-mix(in srgb, var(--clr-surface) 94%, transparent);
        box-shadow:
            0 22px 44px rgb(16 35 45 / 8%),
            inset 0 1px 0 rgb(255 255 255 / 72%);
    }

    .form-header {
        display: grid;
        gap: 0.65rem;
        padding-block-end: 0.85rem;
        border-block-end: 1px solid color-mix(in srgb, var(--clr-primary) 12%, transparent);
    }

    .form-header h2 {
        font-size: clamp(1.55rem, 3vw, 2.2rem);
    }

    .form-header p {
        color: var(--clr-muted);
        max-inline-size: 30rem;
    }

    .form-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .form-field {
        display: grid;
        gap: 0.45rem;
    }

    .form-field-invalid input,
    .form-field-invalid select {
        border-color: color-mix(in srgb, var(--clr-action) 58%, transparent);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--clr-action) 10%, transparent);
    }

    input,
    select,
    textarea {
        width: 100%;
        min-height: 3.55rem;
        padding: 1rem 1rem;
        border: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
        border-radius: var(--radius-sm);
        background: rgb(255 255 255 / 74%);
        color: var(--clr-text);
        font-size: 1rem;
        transition:
            border-color 160ms ease,
            background-color 160ms ease,
            box-shadow 160ms ease;
    }

    input::placeholder,
    textarea::placeholder {
        color: color-mix(in srgb, var(--clr-muted) 88%, white);
    }

    select {
        appearance: none;
        background-image:
            linear-gradient(45deg, transparent 50%, currentColor 50%),
            linear-gradient(135deg, currentColor 50%, transparent 50%);
        background-position:
            calc(100% - 1.35rem) calc(50% - 0.12rem),
            calc(100% - 0.95rem) calc(50% - 0.12rem);
        background-repeat: no-repeat;
        background-size: 0.5rem 0.5rem;
        padding-inline-end: 3.2rem;
    }

    :dir(rtl) select {
        background-position:
            1.35rem calc(50% - 0.12rem),
            1.75rem calc(50% - 0.12rem);
        padding-inline-end: 1rem;
        padding-inline-start: 3.2rem;
    }

    select.is-empty {
        color: color-mix(in srgb, var(--clr-muted) 88%, white);
    }

    textarea {
        min-height: 10rem;
        resize: vertical;
    }

    input:focus,
    select:focus,
    textarea:focus {
        border-color: var(--clr-primary);
        background: var(--clr-surface);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--clr-primary) 10%, transparent);
        outline: none;
    }

    .contact-form .btn {
        justify-self: start;
        min-height: 3.35rem;
        padding-inline: 1.35rem;
    }

    .contact-form .btn:disabled {
        cursor: progress;
        opacity: 0.82;
    }

    .form-note {
        font-weight: 700;
    }

    .form-note-success {
        color: var(--clr-primary-dark);
    }

    .form-note-error {
        color: var(--clr-action);
    }

    .field-error {
        color: var(--clr-action);
        font-size: 0.85rem;
        font-weight: 700;
        line-height: 1.35;
    }

    @media (max-width: 620px) {
        .form-grid {
            grid-template-columns: 1fr;
        }

        .contact-form .btn {
            width: 100%;
        }
    }
</style>
