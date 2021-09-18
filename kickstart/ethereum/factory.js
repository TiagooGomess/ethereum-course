import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xC204e7fD1dDF9A3A465dc9dEf324D8f2883338b4"
);

export default instance;
