const whatsapp = {
    id: 'whatsapp',
    labelKey: 'contactMethods.whatsapp',
    icon: 'whatsapp',
    href: 'https://wa.me/972544755158',
    isExternal: true,
}

const email = {
    id: 'email',
    labelKey: 'contactMethods.email',
    icon: 'email',
    action: 'copy',
    copyValue: 'idokatze@gmail.com',
    copySuccessKey: 'contact.copy.email',
}

const phone = {
    id: 'phone',
    labelKey: 'contactMethods.phone',
    icon: 'phone',
    action: 'copy',
    copyValue: '+972 54-475-5158',
    copySuccessKey: 'contact.copy.phone',
}

const trainingPeaks = {
    id: 'trainingpeaks',
    labelKey: 'contactMethods.trainingPeaks',
    icon: 'trainingpeaks',
    href: 'https://www.trainingpeaks.com/coach/idok',
    isExternal: true,
}

const linkedIn = {
    id: 'linkedin',
    labelKey: 'contactMethods.linkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/idokatze',
    isExternal: true,
}

export const contactMethods = [
    whatsapp,
    email,
    trainingPeaks,
    linkedIn,
]

export const contactPageMethods = [
    whatsapp,
    email,
    phone,
    trainingPeaks,
    linkedIn,
]
