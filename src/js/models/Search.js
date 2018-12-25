import axios from "axios";

export default class Search {
  
    constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "090a3a0204140ef2c2d93a41ae3efa65";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    //   console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
