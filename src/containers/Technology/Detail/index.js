import React, { Component } from 'react';
import { getAll, getById } from "../../../services/technologyServices";
import { Link } from "react-router-dom";
import "../Technology.scss";
import { timeFormatter } from "../../../constants/dateFormat";
import Loader from 'components/Loader/Loader';
import renderHTML from 'react-render-html';
import BreadcrumbComponent from 'components/BreadcrumbComponent';
import { Card } from 'antd'
import YoutubeEmbed from 'components/youtube/YoutubeEmbed';
import 'components/youtube/styles.css'
import axios from 'axios'

class TechnologyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      data: [],
      loading: true,
      technology: []
    }
  }
  async componentDidMount() {
    this.getData()
  }

  async getData() {
    let apiRequest = [getById(this.props.match.params.id), getAll(1, 4)];
    let apiResponse = await axios.all(apiRequest).then(
      axios.spread(function (dataDetail, dataALL) {
        return {
          data: dataDetail,
          technology: dataALL
        };
      })
    );
    if (apiResponse) {
      console.log(apiResponse, 'apiResponse');

      let technologyFilter = apiResponse.technology.docs?.filter(data => data._id !== this.props.match.params.id)
      this.setState({
        data: apiResponse.data,
        technology: technologyFilter,
        loading: false
      })
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      this.getData()
    }
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
          !this.state.loading && this.state.technology.length > 0 && <Card title={'Bài viết khác'} style={{ width: '100%' }}>
            {this.state.technology.map((data, index) => {
              return (
                <div key={index}>
                  <Link className="hover-color" to={`/technology/${data._id}`}>
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

export default TechnologyDetail;
