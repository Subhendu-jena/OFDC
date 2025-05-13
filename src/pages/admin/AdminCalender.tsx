import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from 'date-fns';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
  Plus,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { getAllSlotByDate } from '../../config/controller';
interface Slot {
  id: string;
  time: string;
  note: string;
  isBooked: boolean;
}

interface DaySlots {
  [key: string]: Slot[];
}

const AdminCalender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slots, setSlots] = useState<DaySlots>({});
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [noteText, setNoteText] = useState('');

  const timeSlots = ['10AM-1PM', '2PM-5PM', '6PM-9PM'];

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startWeekDay = monthStart.getDay(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const paddedDays = Array(startWeekDay).fill(null).concat(daysInMonth);

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // const handleDateClick = (date: Date) => {
  //   if (isSameMonth(date, currentDate)) {
  //     setSelectedDate(date);

  //     // Initialize slots for the selected date if they don't exist
  //     const dateKey = format(date, 'yyyy-MM-dd');
  //     if (!slots[dateKey]) {
  //       setSlots((prev) => ({
  //         ...prev,
  //         [dateKey]: timeSlots.map((time) => ({
  //           id: `${dateKey}-${time}`,
  //           time,
  //           note: '',
  //           isBooked: false,
  //         })),
  //       }));
  //     }
  //   }
  // };

  const handleDateClick = async (date: Date) => {
    if (!isSameMonth(date, currentDate)) return;
  
    setSelectedDate(date);
    const dateKey = format(date, 'yyyy-MM-dd');
  
    try {
      const response = await getAllSlotByDate({
        token: sessionStorage.getItem('token'),
        date: dateKey,
      });
  
      const apiSlots = response.data || []; // adjust if needed
  console.log(apiSlots,"IEWUUIYUI")
      const mappedSlots = apiSlots.map((slot: any) => ({
        id: slot.id || `${dateKey}-${slot.time}`, // fallback id
        time: slot.bookingDetails.timeSlot,
        note: slot.bookingType || '',
        isBooked: slot.isBooked ?? false,
      }));
  
      setSlots((prev) => ({
        ...prev,
        [dateKey]: mappedSlots.length
          ? mappedSlots
          : timeSlots.map((time) => ({
              id: `${dateKey}-${time}`,
              time,
              note: '',
              isBooked: false,
            })),
      }));
    } catch (error) {
      console.error('Failed to fetch slots:', error);
      // fallback if API fails
      setSlots((prev) => ({
        ...prev,
        [dateKey]: timeSlots.map((time) => ({
          id: `${dateKey}-${time}`,
          time,
          note: '',
          isBooked: false,
        })),
      }));
    }
  };
  

  const handleSlotClick = (slot: Slot) => {
    setSelectedSlot(slot);
    setNoteText(slot.note);
    setShowNoteModal(true);
  };

  const handleSaveNote = () => {
    if (selectedSlot && selectedDate) {
      const dateKey = format(selectedDate, 'yyyy-MM-dd');
      setSlots((prev) => ({
        ...prev,
        [dateKey]: prev[dateKey].map((slot) =>
          slot.id === selectedSlot.id
            ? { ...slot, note: noteText, isBooked: true }
            : slot
        ),
      }));
      setShowNoteModal(false);
      setNoteText('');
      setSelectedSlot(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <CalendarIcon className="w-6 h-6" />
              Screening Calendar
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePreviousMonth}
                className="p-2 text-white hover:bg-red-700 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-white font-medium">
                {format(currentDate, 'MMMM yyyy')}
              </span>
              <button
                onClick={handleNextMonth}
                className="p-2 text-white hover:bg-red-700 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {paddedDays.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} />;
                }

                const isSelected =
                  selectedDate && isSameDay(date, selectedDate);
                const isCurrentMonth = isSameMonth(date, currentDate);
                const dateKey = format(date, 'yyyy-MM-dd');
                const hasBookings = slots[dateKey]?.some(
                  (slot) => slot.isBooked
                );

                return (
                  <button
                    key={date.toString()}
                    onClick={() => handleDateClick(date)}
                    className={`
        p-2 h-24 text-left border rounded-lg transition
        ${isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200'}
        ${isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'}
        hover:border-red-500 hover:bg-red-50
      `}
                  >
                    <span
                      className={`text-sm ${hasBookings ? 'font-bold text-red-600' : ''}`}
                    >
                      {format(date, 'd')}
                    </span>
                    {isCurrentMonth &&
                      slots[dateKey]?.map(
                        (slot) =>
                          slot.isBooked && (
                            <div
                              key={slot.id}
                              className="mt-1 px-1 py-0.5 text-xs bg-red-100 text-red-700 rounded"
                            >
                              {slot.time}
                            </div>
                          )
                      )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Date Slots */}
          {selectedDate && (
            <div className="border-t p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Available Slots for {format(selectedDate, 'MMMM d, yyyy')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {slots[format(selectedDate, 'yyyy-MM-dd')]?.map((slot) => (
                  <div
                    key={slot.id}
                    className={`
                      p-4 rounded-lg border ${slot.isBooked ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}
                      cursor-pointer hover:border-red-500 transition
                    `}
                    onClick={() => handleSlotClick(slot)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{slot.time}</span>
                    </div>
                    {slot.note && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {slot.note}
                      </p>
                    )}
                    {slot.time && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {slot.time}
                      </p>
                    )}
                    {!slot.note && (
                      <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
                        <Plus className="w-4 h-4" />
                        Add booking
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Note Modal */}
      {showNoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedSlot?.isBooked
                    ? 'Edit Booking Note'
                    : 'Add Booking Note'}
                </h3>
                <button
                  onClick={() => setShowNoteModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Enter booking details..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring focus:ring-red-200"
              />
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setShowNoteModal(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalender;
