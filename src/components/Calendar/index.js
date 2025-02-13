import React, { useEffect, useState } from 'react';
import Select from '../../Form/Select';
import './index.css'

const getDaysOfMonth = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    return days;
}


const ZellerWeekDay = (year, month, day) => {
    let m = month;
    let d = day;
    if (month < 3) {
        year--;
        m += 12;
    }
    let y = year % 100;
    let c = Math.floor(year / 100);

    // 对除法结果取整
    let w = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((13 * (m + 1)) / 5) + d - 1) % 7;
    if (w < 0) {
        w += 7;
    }
    return w;
}

const daysOfWeek = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', ];

export default function Calendar() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [calendarGrid, setCalendarGrid] = useState([]);

    const handleYearChange = (option) => {
        setYear(option.value);
    }

    const handleMonthChange = (option) => {
        setMonth(option.value);
    }
    const renderCalendar = () => {
        const days = getDaysOfMonth(month, year);
        const firstDayInWeek = ZellerWeekDay(year, month, 1);
        console.log(`当前${month + 1}月份的第一天是星期${daysOfWeek[firstDayInWeek]}`);

        const arr = []
        for (let i = 0; i <= 42; i++) {
            if (i < firstDayInWeek) {
                arr.push(<div class="day-box">
                    <div>{daysOfWeek[i % 7]}</div>
                </div>)
            } else {
                if (days.length > 0) {
                    const day = days.shift();
                    const isSelected = day === selectedDay;
                    const isToday = new Date().getDate() === day;
                    const isDisabled = new Date().getMonth() !== month;
                    arr.push(<div class={`day-box ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${isDisabled ? 'disabled' : ''}`}>
                        <div>{daysOfWeek[i % 7]}</div>
                        {day}
                    </div>)
                } else {
                    arr.push(<div class="day-box"></div>)
                }
            }
        }
        setCalendarGrid(arr)
    }

    useEffect(() => {
        if (year && month) {
            renderCalendar();
        }

    }, [year, month])

    return (
        <div className="calendar-container" >
            <div className='select-date'>
                <div className='select-year'>
                    <Select
                        defaultValue={{ name: year, value: year }}
                        onChange={handleYearChange}
                        options={[{ name: 2021, value: 2021 }, { name: 2022, value: 2022 }, { name: 2023, value: 2023 }, { name: 2024, value: 2024 }, { name: 2025, value: 2025 }, { name: 2026, value: 2026 }, { name: 2027, value: 2027 }, { name: 2028, value: 2028 }, { name: 2029, value: 2029 }, { name: 2030, value: 2030 }, { name: 2031, value: 2031 }, { name: 2032, value: 2032 }, { name: 2033, value: 2033 }, { name: 2034, value: 2034 }, { name: 2035, value: 2035 }]} />

                </div>
                <div className='select-month'>
                    <Select
                        defaultValue={{ name: `${month}月`, value: month }}
                        onChange={handleMonthChange}
                        options={[{ name: '1月', value: 1 }, { name: '2月', value: 2 }, { name: '3月', value: 3 }, { name: '4月', value: 4 }, { name: '5月', value: 5 }, { name: '6月', value: 6 }, { name: '7月', value: 7 }, { name: '8月', value: 8 }, { name: '9月', value: 9 }, { name: '10月', value: 10 }, { name: '11月', value: 11 }, { name: '12月', value: 12 }]} />
                </div>
            </div>

            <div className='calendar'>

                {
                    calendarGrid
                }
            </div>


        </div>

    )
}