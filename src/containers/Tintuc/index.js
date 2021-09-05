import React, { Component } from 'react';
import { getAll } from "../../services/tintucServices";
import { Link } from "react-router-dom";
import "./Tintuc.scss";
import { timeFormatter } from "../../constants/dateFormat";
import NoData from 'containers/NoData/index'
import Loader from 'components/Loader/Loader'
import { Button } from 'antd';
import { DownloadOutlined, StepForwardOutlined } from '@ant-design/icons';
class Tintuc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }
  }
  componentDidMount() {
    this.getData()
  }
  async getData() {
    const data = await getAll(1, 0)
    if (data) {
      this.setState({
        data: data.docs,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className="article-list">
        <div>
          {this.state.loading ? <Loader></Loader> : ''}
        </div>
        <div>
          {this.state.data.length == 0 && !this.state.loading ? <NoData></NoData> : ''}
        </div>
        {
          this.state.data?.map(tintuc => {
            return (
              <div key={tintuc._id}>
                <div className="article-item wow zoomIn animated">
                  <div className="article-body" onMouseOver={this.handleMouseOver}>
                    <Link to={`/tintuc/${tintuc._id}`}><h4>{tintuc.tieude}</h4></Link>
                    <p>
                      <span>Thời gian: {timeFormatter(tintuc.created_at)}</span>
                      &nbsp;&nbsp;&nbsp;
                      <span>Mô tả: {tintuc.mota}</span>
                      {/*&nbsp;&nbsp;&nbsp;*/}
                      {/*<span>浏览: {tintuc.mota}</span>*/}
                    </p>
                    <div className="article-abstract">
                      {tintuc.mota} ...
                    </div>
                    <span className='article-link'>
                      <Button type="primary" shape="round" size={'middle'}>
                        <Link style={{ color: 'white' }} to={`/tintuc/${tintuc._id}`}>Xem thêm >></Link>
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default Tintuc;
