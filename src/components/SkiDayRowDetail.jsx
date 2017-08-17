import React from 'react';

const SkiDayRowDetail = () => (
     <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <SnowFlake /> : null}
        </td>
        <td>
            {(backcountry) ? <Terrain /> : null}
        </td>
    </tr>
);

module.exports = SkiDayRowDetail;