import React, { Component } from 'react';
import { getAll } from "../../services/devServices";
import { Link } from "react-router-dom";
import "./Dev.scss";
import { timeFormatter } from "../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import NoData from 'containers/NoData/index'
import { Button, Pagination } from 'antd';
import { DownloadOutlined, StepForwardOutlined } from '@ant-design/icons';
import { logo36 } from 'constants/ImageFromGooglePhotos'

class Dev extends Component {
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
    console.log(data.url, 'data');

    return (
      <div className="article-list">
        <div>
          {this.state.loading ? <Loader></Loader> : ''}
        </div>
        {/* <img src={logo36} alt="" /> */}

        <div>
          {!this.state.loading && this.state.data.length == 0 ? <NoData></NoData> : ''}
        </div>
        {
          this.state.data?.map(dataDev => {
            return (
              <div key={dataDev._id}>
                <div className="article-item wow zoomIn animated">
                  <div className="article-body" onMouseOver={this.handleMouseOver}>
                    <Link to={{ pathname: `/dev/${dataDev.url}`, state: `${dataDev._id}` }}><h4>{dataDev.tieude}</h4></Link>
                    <p>
                      <span>Thời gian: {timeFormatter(dataDev.created_at)}</span>
                      &nbsp;&nbsp;&nbsp;
                    </p>
                    <div className="article-abstract">
                      {dataDev.mota} ...
                    </div>
                    <span className='article-link'>
                      <Button type="primary" shape="round" size={'middle'}>
                        {/* <Link style={{ color: 'white' }} to={`/dev/${dataDev._id}`}>Xem thêm >></Link> */}
                        <Link style={{ color: 'white' }} to={{ pathname: `/dev/${dataDev.url}`, state: `${dataDev._id}` }}>Xem thêm >></Link>

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

export default Dev;
