import React, { Component } from 'react';
import { getAll } from "../../services/technologyServices";
import { Link } from "react-router-dom";
import "./Technology.scss";
import { timeFormatter } from "../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import NoData from 'containers/NoData/index'
import { Button, Pagination } from 'antd';
import { DownloadOutlined, StepForwardOutlined } from '@ant-design/icons';


class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      page: 1,
      limit: 5,
      totalDocs: 0
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const { data, totalDocs, page, limit } = this.state;
    const dataApi = await getAll(page, limit)
    if (dataApi) {
      this.setState({
        data: dataApi.docs,
        loading: false,
        totalDocs: dataApi.totalDocs
      })
    }
  }

  onChangePage = async page => {
    const { limit } = this.state;
    const dataApi = await getAll(page, limit)
    if (dataApi) {
      this.setState({
        data: dataApi.docs,
        loading: false
      })
    }

  };
  render() {
    const { data, totalDocs, page, limit } = this.state;

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
        <div className="page">
          {this.state.data && !this.state.loading ? <Pagination
            onChange={this.onChangePage}
            defaultCurrent={1}
            pageSize={limit}
            total={totalDocs} />
            : ''}
        </div>
      </div>
    )
  }

}

export default Technology;
