import React from 'react'
import { Spin } from "antd";
import './Loader.css';

export default function Loader() {
  return (
    <div className="example">
      <Spin size="large" />
    </div>
  )
}
