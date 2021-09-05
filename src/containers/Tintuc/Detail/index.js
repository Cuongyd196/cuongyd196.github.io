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

  async getData() {
    let apiRequest = [getById(this.props.match.params.id), getAll(1, 4)
    ];
    let apiResponse = await axios.all(apiRequest).then(
      axios.spread(function (dataDetail, dataALL) {
        return {
          data: dataDetail,
          tintuc: dataALL
        };
      })
    );
    if (apiResponse) {
      let tintucFilter = apiResponse.tintuc.docs?.filter(data => data._id !== this.props.match.params.id)
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
          !this.state.loading && <BreadcrumbComponent />
        }
        {
          !this.state.loading && data && <Card title={data.tieude} >
            {data.noidung && renderHTML(data.noidung)}
            {/* {data.linkvideo && renderHTML(data.linkvideo)} */}
            <YoutubeEmbed embedId={`${data.linkvideo}`} />
          </Card>
        }
        {
          !this.state.loading && this.state.tintuc.length > 0 && <Card title={'Bài viết khác'}>
            {this.state.tintuc.map((data, index) => {
              return (
                <div key={index}>
                  <Link className="hover-color" to={`/tintuc/${data._id}`}>
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

export default TintucDetail;
