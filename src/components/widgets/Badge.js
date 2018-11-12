import React from 'react';
import './BadgeStyle.css'

const Badge = (props) =>(
                <div class={props.backStyle}>
                    <div class="row">
                        <div class="col-xs-4">
                            <i class={props.icon} style={props.iconColor}></i>
                        </div>
                        <div class="col-xs-8 text-right">
                            <span> {props.text} </span>
                            <h4 class="font-bold">{props.value} {' '}Dhs</h4>
                        </div>
                    </div>
                </div>
)

export default Badge
