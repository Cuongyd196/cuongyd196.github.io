import React from 'react'
import './Contacts.css'
import { FastBackwardOutlined, FacebookOutlined, YoutubeOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { Card } from 'antd'

function Contacts() {
  return (
    <div>
      <Card title={'Thông tin liên hệ '} style={{ width: '100%' }}>
        <h3 style={{ marginTop: 1 }}>Cường Nguyễn</h3>
        Trang Facebook <FacebookOutlined />:
        <a href="https://fb.com/cuongppk" target="_blank" rel="noopener noreferrer"> https://fb.com/cuongppk</a>
        <br></br>
        Youtube  <YoutubeOutlined />:
        <a href="https://www.youtube.com/channel/UCIFEDkmDF8gC3MJ-ycu7UoA" target="_blank" rel="noopener noreferrer"> https://www.youtube.com/channel/UCIFEDkmDF8gC3MJ-ycu7UoA </a>
        <br></br>
        Github <GithubOutlined />:
        <a href="https://github.com/cuongyd196" target="_blank" rel="noopener noreferrer"> https://github.com/cuongyd196 </a>
      </Card>
    </div>
  )
}
export default Contacts
