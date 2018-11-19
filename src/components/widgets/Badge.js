import React from 'react';
import './BadgeStyle.css'

const Badge = (props) =>(
    <div class="ibox float-e-margins">
        <div class="ibox-content">
            <h2 class="no-margins">{props.value}</h2>
            <div class="stat-percent font-bold "><i class={props.icon}></i></div>
            <small>{props.text}</small>
        </div>
        <div class="ibox-content ibox-content2">
            {props.children}
        </div>
    </div>
)

export default Badge
