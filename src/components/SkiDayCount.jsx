import Terrain from 'react-icons/lib/md/terrain.js'
import SnowFlake from 'react-icons/lib/ti/weather-snow.js'
import Calendar from 'react-icons/lib/fa/calendar.js'
 const percentToDecimal = (decimal) => {
        return ((decimal * 100) + '%');
    };

const calcGoalProgress = (total, goal) => {
        return percentToDecimal(total/goal);
    };

const SkiDayCount = ({total, powder, backcountry, goal}) => 
    (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total} </span>
                    <Calendar />
                    <span>days</span>                    
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                    <SnowFlake />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <Terrain />
                    <span>days</span>
                </div>
                <div>
                    <span>{calcGoalProgress(total,goal)}</span>
                </div>
            </div>
        );
   
module.exports = SkiDayCount;