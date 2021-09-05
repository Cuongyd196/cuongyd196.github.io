import React, { Component } from 'react';
import { getAll } from "../../services/devServices";
import { Link } from "react-router-dom";
import "./Dev.scss";
import { timeFormatter } from "../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import NoData from 'containers/NoData/index'
import { Button } from 'antd';
import { DownloadOutlined, StepForwardOutlined } from '@ant-design/icons';


class Dev extends Component {
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
          {!this.state.loading && this.state.data.length == 0 ? <NoData></NoData> : ''}
        </div>
        {
          this.state.data?.map(dataDev => {
            return (
              <div key={dataDev._id}>
                <div className="article-item wow zoomIn animated">
                  <div className="article-body" onMouseOver={this.handleMouseOver}>
                    <Link to={`/dev/${dataDev._id}`}><h4>{dataDev.tieude}</h4></Link>
                    <p>
                      <span>Thời gian: {timeFormatter(dataDev.created_at)}</span>
                      &nbsp;&nbsp;&nbsp;
                    </p>
                    <div className="article-abstract">
                      {dataDev.mota} ...
                    </div>
                    <span className='article-link'>
                      <Button type="primary" shape="round" size={'middle'}>
                        <Link style={{ color: 'white' }} to={`/dev/${dataDev._id}`}>Xem thêm >></Link>
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

export default Dev;
