import React, { Component } from 'react';
import { getAll, getById } from "../../../services/tintucServices";
import { Link } from "react-router-dom";
import "../Tintuc.scss";
import { timeFormatter } from "../../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import renderHTML from 'react-render-html';
import { Card } from 'antd'
import BreadcrumbComponent from 'components/BreadcrumbComponent';
import YoutubeEmbed from 'components/youtube/YoutubeEmbed';
import 'components/youtube/styles.css'
import axios from 'axios'

class TintucDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      data: [],
      loading: true,
      tintuc: []
    }
  }
  async componentDidMount() {
    this.getData()
  }

  async componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      this.getData()
    }
    window.scrollTo(0, 0);
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
          tintuc: dataALL
        };
      })
    );
    if (apiResponse) {
      let tintucFilter = apiResponse.tintuc.docs?.filter(data => data._id !== id)
      this.setState({
        data: apiResponse.data,
        tintuc: tintucFilter,
        loading: false
      })
    }
  }
  render() {
    const data = this.state.data
    return (
      <div>
        <div >
          {this.state.loading ? <Loader></Loader> : ''}
        </div>

        {
          !this.state.loading && <div style={{ width: '100%', padding: '0px' }}> <BreadcrumbComponent /> </div>
        }
        {
          !this.state.loading && data && <Card style={{ width: '100%', padding: '0px' }} title={data.tieude} >
            {data.noidung && renderHTML(data.noidung)}
            {/* {data.linkvideo && renderHTML(data.linkvideo)} */}
            <YoutubeEmbed embedId={`${data.linkvideo}`} />
          </Card>
        }
        {
          !this.state.loading && this.state.tintuc.length > 0 && <div > <Card title={'Bài viết khác'}>
            {this.state.tintuc.map((data, index) => {
              return (
                <div key={index}>
                  <Link className="hover-color" to={{ pathname: `/tintuc/${data.url}`, state: `${data._id}` }}>
                    <li className="">{data.tieude}</li>
                  </Link>
                </div>
              )
            })}
          </Card>
          </div>

        }
      </div>

    )
  }

}

export default TintucDetail;
