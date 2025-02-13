

import Head from '../../components/Head';
import Calendar from '../../components/Calendar';
import './index.css';
export default function Todo() {
    return (
        <div className="todo-page">
            <div class="head-container">
                <Head logoType={2} />
            </div>
            <div className='todo-container'>
                <Calendar />
            </div>
        </div>
    )
}