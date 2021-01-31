import fetchMock from 'fetch-mock';
//import axiosAPI from './component/compnents/axiosAPI';
//import TruckDriversList from "./compnents/truckDriversList";
import drivers from '../component/drivers.js'

//import axios from 'axios';



describe('drivers', () => {

  it('can fetch', async () => {

    fetchMock.get('http://localhost:6700/truckdrivers');

    const response = await drivers('http://localhost:6700/truckdrivers');
    const result = await response.json();

    expect(result.name).response("Winifred Alexander");

  });
});