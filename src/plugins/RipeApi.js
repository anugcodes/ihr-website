/** @file ripe-api.js
 *  @brief Vue-js plugin wrapping RIPE API
 */

import axios from 'axios'

// Base URL for RIPE stat API
const RIPE_API_BASE = 'https://stat.ripe.net/data/'

var ripe_axios = axios.create({ baseURL: RIPE_API_BASE })

export default {
  async asnNeighbours(asn) {
    let queryarg = {
      params: {
        resource: asn,
      },
    }
    console.log(ripe_axios)
    const response = await ripe_axios.get('asn-neighbours/data.json', queryarg)
    return response.data
  },
  async bgplayData(ressource) {
    let queryarg = {
      params: {
        resource: ressource,
        unix_timestamps: 'TRUE',
        //starttime: '2021-07-06T00:00',
        //endtime: '2021-07-07T01:00',
        rrcs: 0
      }
    }
    console.log('calling RIPE BGPlay API')
    const response = await ripe_axios.get('bgplay/data.json', queryarg)
    return response.data
  }
}
