import React, { Component } from 'react';
import { getAll } from "../../services/technologyServices";
import { Link } from "react-router-dom";
import "./Technology.scss";
import { timeFormatter } from "../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import NoData from 'containers/NoData/index'
import { Button } from 'antd';
import { DownloadOutlined, StepForwardOutlined } from '@ant-design/icons';


class Technology extends Component {
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
          this.state.data?.map(dataTechnology => {
            return (
              <div key={dataTechnology._id}>
                <div className="article-item wow zoomIn animated">
                  <div className="article-body" onMouseOver={this.handleMouseOver}>
                    <Link to={`/technology/${dataTechnology._id}`}><h4>{dataTechnology.tieude}</h4></Link>
                    <p>
                      <span>Thời gian: {timeFormatter(dataTechnology.created_at)}</span>
                      &nbsp;&nbsp;&nbsp;
                    </p>
                    <div className="article-abstract">
                      {dataTechnology.mota} ...
                    </div>
                    <span className='article-link'>
                      <Button type="primary" shape="round" size={'middle'}>
                        <Link style={{ color: 'white' }} to={`/technology/${dataTechnology._id}`}>Xem thêm >></Link>
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

export default Technology;
