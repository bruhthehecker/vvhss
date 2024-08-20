document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Sample month data for demonstration
    const monthData = {
        '2024-08-01': 'School Reopening',
        '2024-08-05': 'Sports Day',
        '2024-08-15': 'Independence Day',
    };

    function renderCalendar() {
        let calendarHTML = '';

        // Weekday headers
        daysOfWeek.forEach(day => {
            calendarHTML += `<div class="calendar-day header">${day}</div>`;
        });

        // Days in the month
        for (let i = 1; i <= 31; i++) {
            const date = `2024-08-${String(i).padStart(2, '0')}`;
            const event = monthData[date] || '';
            calendarHTML += `<div class="calendar-day${event ? ' event' : ''}">${i} ${event ? `<br>${event}` : ''}</div>`;
        }

        calendarElement.innerHTML = calendarHTML;
    }

    renderCalendar();
});
