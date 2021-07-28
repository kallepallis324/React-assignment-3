import axios from "axios";

let ApiCallFilter = async () => {
    let CardFilterResponse = await axios.get("https://api.edyoda.com/v1/blog/postcategories/")
    return CardFilterResponse.data
}
let ApiCallData = async (UrlValue) => {
    let CardResponse = await axios.get("https://api.edyoda.com/v1/blog/" + UrlValue)
    return CardResponse.data
}
export {
    ApiCallData,
    ApiCallFilter
}