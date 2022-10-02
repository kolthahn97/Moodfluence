import { Calendar } from './CalendarSideMenu';

interface DefaultCalendarChipsProps {
    calendar: Calendar
}

export default function DefaultCalendarChips({
	calendar
}: DefaultCalendarChipsProps) {
    const {selectedDate, setSelectedDate, useView} = calendar
    const {view, setView} = useView
	return <>I am chips</>
}
