import React, { Component } from 'react';
import { getAll, getById } from "../../../services/devServices";
import { Link } from "react-router-dom";
import "../Dev.scss";
import { timeFormatter } from "../../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import renderHTML from 'react-render-html';
import BreadcrumbComponent from 'components/BreadcrumbComponent';
import { Card } from 'antd'
import YoutubeEmbed from 'components/youtube/YoutubeEmbed';
import 'components/youtube/styles.css'
import axios from 'axios'
import { saveID } from 'reduxApp'
import { connect } from 'react-redux'

class DevDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      data: [],
      loading: true,
      dev: []
    }
  }
  async componentDidMount() {
    this.getData()
  }

  saveToLocalStorage(idDetail) {
    try {
      const checkIdDetail = this.loadIdDetailFromLocalStorage()
      if (checkIdDetail) {
        window.localStorage.removeItem('idDetail');
      }
      const idDetailStore = JSON.stringify(idDetail);
      window.localStorage.setItem('idDetail', idDetailStore);
    } catch (e) {
      console.log(e);
    }
  }

  loadIdDetailFromLocalStorage() {
    try {
      const idDetailStore = window.localStorage.getItem('idDetail');
      if (idDetailStore === null) return undefined;
      return JSON.parse(idDetailStore);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }


  async getData() {
    let id = this.props.location.state
    if (id) this.saveToLocalStorage(id)
    id = this.loadIdDetailFromLocalStorage()
    let apiRequest = [getById(id), getAll(1, 4)];
    let apiResponse = await axios.all(apiRequest).then(
      axios.spread(function (dataDetail, dataALL) {
        return {
          data: dataDetail,
          dev: dataALL
        };
      })
    );
    if (apiResponse) {
      let devFilter = apiResponse.dev.docs?.filter(data => data._id !== id)
      this.setState({
        data: apiResponse.data,
        dev: devFilter,
        loading: false
      })
    }

  }

  async getDataUpdate() {
    const idLocal = this.loadIdDetailFromLocalStorage()
    let apiRequest = [getById(idLocal), getAll(1, 4)];
    let apiResponse = await axios.all(apiRequest).then(
      axios.spread(function (dataDetail, dataALL) {
        return {
          data: dataDetail,
          dev: dataALL
        };
      })
    );
    if (apiResponse) {
      let devFilter = apiResponse.dev.docs?.filter(data => data._id !== this.props.match.params.id)
      this.setState({
        data: apiResponse.data,
        dev: devFilter,
        loading: false,
      })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      this.getData()
    }
    // if (this.state._id === '' && !this.state.data) {
    //   this.getDataUpdate()
    // }
    window.scrollTo(0, 0);
  }
  render() {
    const data = this.state.data
    return (
      <div className="article-list">
        <div>
          {this.state.loading ? <Loader></Loader> : ''}
        </div>
        {
          !this.state.loading && <BreadcrumbComponent />
        }
        {
          !this.state.loading && data && <Card title={data.tieude} style={{ width: '100%' }}>
            {data.noidung && renderHTML(data.noidung)}
            {/* {data.linkvideo && renderHTML(data.linkvideo)} */}
            <YoutubeEmbed embedId={`${data.linkvideo}`} />
          </Card>
        }
        {
          !this.state.loading && this.state.dev.length > 0 && <Card title={'Bài viết khác'} style={{ width: '100%' }}>
            {this.state.dev.map((data, index) => {
              return (
                <div key={data._id}>
                  <Link className="hover-color" to={{ pathname: `/dev/${data.url}`, state: `${data._id}` }}>
                    <li className="">{data.tieude}</li>
                  </Link>
                </div>
              )
            })}
          </Card>
        }
      </div>

    )
  }

}


export default DevDetail