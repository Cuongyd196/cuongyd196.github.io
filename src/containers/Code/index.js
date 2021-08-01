import React, { Component } from 'react';
import {getAll} from "../../services/tintuc/tintucService";
import {Link} from "react-router-dom";
import '../../components/articles/Articles.scss';
import { timeFormatter} from "../../common/dateFormat";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData(){
    const data = await getAll(1,0)
    if(data) {
      this.setState({
        data: data.docs
      })
    }
  }
  render() {
    return (
      <div className="article-list">
        {
          this.state.data?.map(tintuc => {
            return (
              <div key={tintuc.id}>
                <div className="article-item wow zoomIn animated">
                  <div className="article-body" onMouseOver={this.handleMouseOver}>
                    <Link to={`/article-detail/${tintuc.id}`}><h4>{tintuc.tieude}</h4></Link>
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
                    <span className="article-link"><Link to={`/article-detail/${tintuc.id}`}>Xem thêm >></Link></span>
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

export default Code;