const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function createContactFormValues() {
    return {
        name: '',
        email: '',
        goal: '',
        message: '',
    }
}

export function createContactFieldErrors() {
    return {
        name: '',
        email: '',
        goal: '',
    }
}

export function hasContactFormAccessKey() {
    return Boolean(WEB3FORMS_ACCESS_KEY)
}

export function validateContactForm(values) {
    const errors = createContactFieldErrors()
    const sanitizedValues = {
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
    }

    if (!sanitizedValues.name) {
        errors.name = 'contact.validation.name'
    }

    if (!sanitizedValues.email) {
        errors.email = 'contact.validation.emailRequired'
    } else if (!EMAIL_PATTERN.test(sanitizedValues.email)) {
        errors.email = 'contact.validation.emailInvalid'
    }

    if (!sanitizedValues.goal) {
        errors.goal = 'contact.validation.goal'
    }

    return {
        errors,
        isValid: !Object.values(errors).some(Boolean),
        values: sanitizedValues,
    }
}

export async function submitContactForm(values) {
    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', `Coaching consultation request from ${values.name}`)
    formData.append('from_name', 'Coach Ido K Website')
    formData.append('replyto', values.email)
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('goal', values.goal)
    formData.append('message', values.message)
    formData.append('botcheck', '')

    const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    })
    const result = await response.json()

    if (!response.ok || !result.success) {
        throw new Error(result.message || result.body?.message || '')
    }
}
