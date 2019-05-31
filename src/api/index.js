const axios = require("axios");
const { ENDPOINT } = require("../util/constants");

const getData = () => {
	return axios.get(ENDPOINT);
};

module.exports = {
	getData
};
