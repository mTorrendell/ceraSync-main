function formatDateTime(dateTimeString) {
    return new Date(dateTimeString).toLocaleString('ev-US', {
        year:   'numeric',
        month:  'long',
        day:    'numeric',
        hour:   'numeric',
        minute: 'numeric',
        hour12:  true
    });
}

export { formatDateTime };