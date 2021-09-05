import React from 'react';
import { Alert } from 'antd';

function NoData() {
  return <Alert message="Thông báo" description=" Danh mục không có dữ liệu." type="error" showIcon />;
}
export default NoData;
