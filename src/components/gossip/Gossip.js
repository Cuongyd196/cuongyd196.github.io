import React, { Component } from 'react';

import {
    Timeline
} from 'antd';
import gossips from '../../data/gossip.json';

import "./Gossip.scss";

const Item = Timeline.Item;

class Gossip extends Component {
    render() {
        return (
            <div className="gossip-wrap">
                <div className="gossip-body">
                    <Timeline>
                        {
                            gossips.map((item, index) => (
                                <Item key={index}>
                                    <div className="gossip-item wow fadeInLeft animated">
                                        <div className="gossip-detail">
                                            <pre>
                                                {item.detail}
                                            </pre>
                                        </div>
                                        <p className="gossip-author">record@ {item.created_at} </p>
                                    </div>
                                </Item>
                            ))
                        }
                    </Timeline>
                </div>
            </div>
        )
    }
}

export default Gossip;