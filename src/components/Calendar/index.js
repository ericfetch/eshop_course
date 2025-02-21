import React, { useEffect, useState } from 'react';
import Select from '../../Form/Select';
import './index.css';

const getDaysOfMonth = (month, year) => {
  // 这里拿上个月，最后一天
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};


const ZellerWeekDay = (year, month, day) => {
  let m = month;
  const d = day;
  if (month < 3) {
    year--;
    m += 12;
  }
  const y = year % 100;
  const c = Math.floor(year / 100);

  // 对除法结果取整
  let w = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((13 * (m + 1)) / 5) + d - 1) % 7;
  if (w < 0) {
    w += 7;
  }
  return w;
};

const daysOfWeek = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',];

export default function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [calendarGrid, setCalendarGrid] = useState([]);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('calendarTasks');
    if (savedTasks) {
      return JSON.parse(savedTasks).map(task => ({
        ...task,
        startDate: new Date(task.startDate),
        endDate: new Date(task.endDate)
      }));
    }
    return [];
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');
  const [endDate, setEndDate] = useState(null);

  const handleYearChange = (option) => {
    setYear(option.value);
  };

  const handleMonthChange = (option) => {
    setMonth(option.value);
  };
  const renderCalendar = () => {
    const taskPositions = new Map();
    const tasksByDate = new Map();
    const tasksByWeek = new Array(6).fill(0); // 用于存储每周的最大任务数
    
    // 首先将任务按日期分组
    tasks.forEach(task => {
      const start = new Date(task.startDate);
      const end = new Date(task.endDate);
      for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        const dateKey = date.toISOString().split('T')[0];
        if (!tasksByDate.has(dateKey)) {
          tasksByDate.set(dateKey, []);
        }
        tasksByDate.get(dateKey).push(task.id);
        
        // 计算该日期在日历中的周数（0-5）
        const firstDayInWeek = ZellerWeekDay(year, month + 1, 1);
        const dayOfMonth = date.getDate();
        const weekIndex = Math.floor((firstDayInWeek + dayOfMonth - 1) / 7);
        if (date.getMonth() === month && weekIndex >= 0 && weekIndex < 6) {
          tasksByWeek[weekIndex] = Math.max(tasksByWeek[weekIndex], tasksByDate.get(dateKey).length);
        }
      }
    });

    tasks.forEach(task => {
      const start = new Date(task.startDate);
      const end = new Date(task.endDate);
      let maxPosition = -1;
      
      for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        const dateKey = date.toISOString().split('T')[0];
        const dayTasks = tasksByDate.get(dateKey) || [];
        
        const usedPositions = new Set();
        dayTasks.forEach(taskId => {
          if (taskPositions.has(taskId)) {
            usedPositions.add(taskPositions.get(taskId));
          }
        });
        
        let position = 0;
        while (usedPositions.has(position)) {
          position++;
        }
        maxPosition = Math.max(maxPosition, position);
      }
      
      taskPositions.set(task.id, maxPosition);
    });

    const days = getDaysOfMonth(month-1, year);
    const firstDayInWeek = ZellerWeekDay(year, month , 1);
    
    const prevMonthDays = getDaysOfMonth(month-2, year);
    const prevMonthLastDays = prevMonthDays.slice(-firstDayInWeek);
    
    const nextMonthDays = getDaysOfMonth(month , year);
    
    const baseHeight = 100; // 基础高度
    const taskHeight = 24; // 每个任务的高度
    const padding = 8; // 底部填充

    const arr = [];
    for (let i = 0; i < 42; i++) {
      const weekIndex = Math.floor(i / 7);
      const maxTasksInThisWeek = tasksByWeek[weekIndex];
      const cellHeight = Math.max(baseHeight, baseHeight + (maxTasksInThisWeek * taskHeight) + padding);

      if (i < firstDayInWeek) {
        const prevDay = prevMonthLastDays[i];
        arr.push(
          <div className="calendar-cell disabled" style={{ height: `${cellHeight}px` }}>
            <div className="date-header">
              <span>{prevDay}</span>
            </div>
          </div>
        );
      } else if (i >= firstDayInWeek + days.length) {
        const nextDay = nextMonthDays[i - (firstDayInWeek + days.length)];
        arr.push(
          <div className="calendar-cell disabled" style={{ height: `${cellHeight}px` }}>
            <div className="date-header">
              <span>{nextDay}</span>
            </div>
          </div>
        );
      } else {
        const day = days[i - firstDayInWeek];
        const currentDate = new Date(year, month, day);
        const isSelected = day === selectedDay;
        const isToday = new Date().getDate() === day && new Date().getMonth() === month;
        
        const dayTasks = getTasksForDate(currentDate);
        
        arr.push(
          <div 
            className={`calendar-cell ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
            style={{ height: `${cellHeight}px` }}
          >
            <div className="date-header">
              <span>{day}</span>
              <div
                className="add-task-btn material-btn"
                onClick={() => handleAddTask(new Date(year, month, day))}
              >
                <span className="material-icon"></span>
              </div>
            </div>
            <div className="tasks-container">
              {dayTasks.map(task => {
                const normalizeDate = (date) => {
                  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
                };
                
                const taskStart = normalizeDate(task.startDate);
                const taskEnd = normalizeDate(task.endDate);
                const currentDateTime = normalizeDate(currentDate);
                
                const isStartDay = taskStart === currentDateTime;
                const isEndDay = taskEnd === currentDateTime;
                const isMiddleDay = currentDateTime > taskStart && currentDateTime < taskEnd;
                
                let taskClassName = 'task-item';
                if (isStartDay) {taskClassName += ' task-start';}
                if (isEndDay) {taskClassName += ' task-end';}
                if (isMiddleDay) {taskClassName += ' task-middle';}
                
                const position = taskPositions.get(task.id);
                
                return (
                  <div 
                    key={task.id} 
                    className={taskClassName}
                    style={{
                      marginTop: `${position * 24}px`,
                      position: 'absolute',
                      left: 0,
                      right: isEndDay ? '4px' : 0,
                      height: '22px',
                      backgroundColor: `var(--task-color-${task.id % 5})`
                    }}
                    title={`${task.content} (${task.startDate.toLocaleDateString()} - ${task.endDate.toLocaleDateString()})`}
                  >
                    {isStartDay && task.content}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
    setCalendarGrid(arr);
  };

  useEffect(() => {
    if (year && month) {
      renderCalendar();
    }
  }, [year, month, tasks]);

  const handleAddTask = (date) => {
    setSelectedDate(date);
    setEndDate(date);
    setIsModalOpen(true);
  };

  const handleSubmitTask = () => {
    if (newTaskContent.trim() && selectedDate) {
      const newTasks = [
        ...tasks,
        {
          id: Date.now().toString(),
          content: newTaskContent,
          startDate: selectedDate,
          endDate: endDate
        }
      ];
      setTasks(newTasks);
      localStorage.setItem('calendarTasks', JSON.stringify(newTasks));
      setNewTaskContent('');
      setIsModalOpen(false);
    }
  };

  const getTasksForDate = (date) => {
    const normalizeDate = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    };

    return tasks.filter(task => {
      const taskDate = normalizeDate(date);
      const startDate = normalizeDate(task.startDate);
      const endDate = normalizeDate(task.endDate);
      return taskDate >= startDate && taskDate <= endDate;
    });
  };

  return (
    <div className="calendar-container">
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
        <div className="calendar-header">
          {daysOfWeek.map(day => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-body">
          {calendarGrid}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>添加任务</h3>
            <input
              type="text"
              value={newTaskContent}
              onChange={(e) => setNewTaskContent(e.target.value)}
              placeholder="输入任务内容"
            />
            <div className="date-inputs">
              <div>
                <label>开始日期：</label>
                <input 
                  type="date" 
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
              </div>
              <div>
                <label>结束日期：</label>
                <input 
                  type="date" 
                  value={endDate.toISOString().split('T')[0]}
                  min={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                />
              </div>
            </div>
            <div className="modal-actions">
              <button onClick={handleSubmitTask}>确定</button>
              <button onClick={() => setIsModalOpen(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}