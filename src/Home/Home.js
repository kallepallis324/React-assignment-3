import React from 'react';
import TopBar from "../TopBar/TopBar";
import "../App.css"
import { ApiCallFilter, ApiCallData } from '../ApiCall/ApiCall';
import Card from '../Card/Card';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UrlValue: "",
            filterResponse: [],
            cardResponse: [],
            indextoHighlght: 0
        }
    }
    ApiFilterRes = async () => {
        let APIFilterRes = await ApiCallFilter()
        let arr = [{
            "id": APIFilterRes.length + 2,
            "title": "All",
            "slug": "",
            "description": "",
            "small_image": "",
            "posted_on": "2019-07-05T06:57:34.726205Z",
            "authorname": "Arman Ahmed"
        }]
        arr.push(...APIFilterRes)

        this.setState({
            filterResponse: arr
        })

    }
    ApiCardRes = async () => {
        let APICardRes = await ApiCallData(this.state.UrlValue)
        this.setState({
            cardResponse: APICardRes
        })

    }
    componentDidMount() {
        this.ApiFilterRes()
        this.ApiCardRes()
    }
    filterFunction = async (item, index) => {
        let topass = item.slug === "" ? "" : item.slug + "/"
        let APICardRes = await ApiCallData(topass)

        this.setState({
            cardResponse: item.slug === "" ? APICardRes : APICardRes.posts,
            indextoHighlght: index
        }, () => {
            console.log(this.state.cardResponse)
        })
    }
    render() {
        return (<>
            <TopBar />
            <div id="mains">
                <h3 id="latestPost">latest Posts</h3>
                <div id="filterSec">
                    <div id="filterSecFirstDiv">
                        <img style={{ width: "25px", height: "25px" }} alt="Filter Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" />
                        <p style={{ fontSize: "0.85em", fontWeight: "600", marginLeft: "0.5em" }}>Filter By Category</p>
                    </div>
                    <div id="filterSecSecondDiv">
                        {this.state.filterResponse.length ? this.state.filterResponse.map((ite, index) => {
                            return (<>
                                <div key={ite.title} className={`filterDiv ${this.state.indextoHighlght === index ? "filterActive" : ""}`} onClick={() => this.filterFunction(ite, index)}>{ite.title}</div>
                            </>)
                        }) : null}
                    </div>
                </div>
                <div id="mainDiv">
                    <Card cardResponseSend={this.state.cardResponse} />
                </div>
            </div>
        </>)
    }
}
export default Home;